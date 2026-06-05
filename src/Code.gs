/**
 * Gmail AI Priority Sorter
 *
 * Gmailの未読メールを分類し、優先度に応じてラベルを自動付与する
 * Google Apps Script用のサンプルコードです。
 *
 * 初期版ではAI APIを使わず、キーワードベースで分類します。
 */

function classifyUnreadEmails() {
  const processedLabelName = 'AI処理済み';
  const threads = GmailApp.search('is:unread -label:' + processedLabelName, 0, 10);

  const processedLabel = getOrCreateLabel(processedLabelName);

  threads.forEach(thread => {
    const messages = thread.getMessages();
    const message = messages[messages.length - 1];

    const subject = message.getSubject();
    const body = message.getPlainBody().slice(0, 1000);

    const category = classifyByRules(subject, body);
    const categoryLabel = getOrCreateLabel(category);

    thread.addLabel(categoryLabel);
    thread.addLabel(processedLabel);
  });
}

function classifyByRules(subject, body) {
  const text = subject + '\n' + body;

  if (
    text.includes('至急') ||
    text.includes('緊急') ||
    text.includes('本日中') ||
    text.includes('早急')
  ) {
    return '至急';
  }

  if (
    text.includes('返信お願いします') ||
    text.includes('ご返信') ||
    text.includes('対応お願いします')
  ) {
    return '自分対応';
  }

  if (
    text.includes('確認お願いします') ||
    text.includes('ご確認ください') ||
    text.includes('確認をお願いします')
  ) {
    return '確認のみ';
  }

  if (
    text.includes('共有') ||
    text.includes('ご報告') ||
    text.includes('参考まで')
  ) {
    return '共有のみ';
  }

  return '後で確認';
}

function getOrCreateLabel(labelName) {
  let label = GmailApp.getUserLabelByName(labelName);

  if (!label) {
    label = GmailApp.createLabel(labelName);
  }

  return label;
}
