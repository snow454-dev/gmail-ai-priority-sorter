# Gmail AI Priority Sorter

Gmailの未読メールをAIで分類し、優先度に応じてラベルを自動付与するGoogle Apps Scriptテンプレートです。

## 概要

このリポジトリは、小規模事業者・店舗運営者・個人事業主向けに、Gmailの業務メール確認負担を減らすためのオープンソーステンプレートです。

大量の未読メールを確認する代わりに、AIまたはルールベース分類によって、メールを以下のようなラベルに自動分類します。

- 至急
- 自分対応
- 共有のみ
- 確認のみ
- 後で確認
- AI処理済み

## 解決したい課題

小規模な事業者や店舗では、メール・LINE・チャット・電話など複数の連絡手段が混在し、重要なメールが埋もれやすくなります。

特に、1日数十通から100通以上のメールが届く環境では、以下のような問題が起きます。

- 重要メールを見落とす
- 返信が必要なメールが埋もれる
- 共有だけでよいメールまで確認に時間がかかる
- 管理者の確認負担が大きい
- 高価なCRMや専用ツールを導入しづらい

このツールは、GmailとGoogle Apps Scriptを使って、低コストでメール整理を自動化することを目的としています。

## 主な機能

- Gmailの未読メールを取得
- 件名と本文をもとにメールを分類
- Gmailラベルを自動付与
- 「AI処理済み」ラベルで二重処理を防止
- Google Apps Scriptだけで実行可能
- 将来的にOpenAI API / Gemini APIによるAI分類に対応予定

## 想定ユーザー

- 小規模事業者
- 店舗運営者
- 個人事業主
- バックオフィス担当者
- Gmailを業務利用しているチーム
- 高価なCRMを導入せずにメール整理をしたい人

## 使用技術

- Google Apps Script
- Gmail
- Gmail Labels
- OpenAI API / Gemini API
- Google Sheets

## フォルダ構成

```text
gmail-ai-priority-sorter/
├── README.md
├── LICENSE
├── docs/
│   └── setup-ja.md
├── examples/
│   └── label-rules.example.csv
├── prompts/
│   └── classification-prompt-ja.md
└── src/
    └── Code.gs
