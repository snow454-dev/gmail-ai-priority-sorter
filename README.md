# Gmail AI Priority Sorter

Gmailの未読メールをAIで分類し、優先度に応じてラベルを自動付与するGoogle Apps Scriptテンプレートです。

## できること

- Gmailの未読メールを取得
- 件名と本文をもとにメールを分類
- 「至急」「自分対応」「共有のみ」「確認のみ」などのラベルを自動付与
- 処理済みラベルを付けて二重処理を防止
- 小規模事業者や店舗運営者のメール確認負担を減らす

## 想定ユーザー

- 1日に大量の業務メールを受け取る人
- 重要メールを見落としたくない管理者
- Gmailを使っている小規模事業者
- 高価なCRMを導入せずにメール整理を自動化したい人

## 使用技術

- Google Apps Script
- Gmail
- OpenAI API / Gemini API
- Google Sheets

## 今後の予定

- [ ] サンプルコード追加
- [ ] セットアップ手順追加
- [ ] AI分類プロンプト追加
- [ ] Google Sheets設定テンプレート追加
- [ ] 英語版README追加

## License

MIT
