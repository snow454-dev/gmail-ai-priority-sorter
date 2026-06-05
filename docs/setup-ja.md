# セットアップ手順

このドキュメントでは、Gmail AI Priority Sorter を Google Apps Script で使う方法を説明します。

## 1. Google Apps Script を開く

以下のページを開きます。

https://script.google.com/

## 2. 新しいプロジェクトを作成

「新しいプロジェクト」をクリックします。

プロジェクト名は以下のようにします。

Gmail AI Priority Sorter

## 3. コードを貼り付ける

このリポジトリの `src/Code.gs` の内容をコピーし、Google Apps Script のエディタに貼り付けます。

## 4. 初回実行

関数一覧から以下を選択します。

classifyUnreadEmails

その後、「実行」をクリックします。

## 5. 権限を許可

初回実行時に Gmail へのアクセス許可を求められます。

内容を確認し、許可してください。

## 6. Gmailでラベルを確認

Gmailに以下のようなラベルが作成されます。

- 至急
- 確認のみ
- 共有のみ
- AI処理済み

## 7. 自動実行したい場合

Google Apps Script の「トリガー」から、時間主導型トリガーを設定します。

例：

- 1時間ごと
- 30分ごと
- 1日1回

## 注意事項

この初期バージョンは、AIではなく簡易的なルールベース分類です。

今後、OpenAI API や Gemini API を使った分類に対応予定です。
