# Gmail AI Priority Sorter

Gmail AI Priority Sorter is a Google Apps Script template that helps small businesses organize unread Gmail messages by priority.

This project is designed for small teams, local shops, freelancers, and non-technical operators who receive many emails every day but do not want to introduce a complex CRM system.

## Features

- Classifies unread Gmail messages
- Adds Gmail labels automatically
- Prevents duplicate processing with a processed label
- Works with Google Apps Script
- Designed for Japanese small business workflows

## Current Labels

The initial version classifies messages into:

- 至急
- 確認のみ
- 共有のみ
- AI処理済み

## Use Cases

- Reducing email overload
- Preventing urgent emails from being missed
- Organizing messages for small teams
- Supporting store managers and local business operators
- Creating a low-cost email triage workflow

## Project Structure

gmail-ai-priority-sorter/
├── README.md
├── docs/
│   └── setup-ja.md
└── src/
    └── Code.gs

## Setup

See the Japanese setup guide:

[docs/setup-ja.md](docs/setup-ja.md)

## Roadmap

- [ ] Add OpenAI API classification
- [ ] Add Gemini API classification
- [ ] Add Google Sheets configuration
- [ ] Add English setup guide
- [ ] Add sample screenshots
- [ ] Add test examples

## Why this project exists

Many small businesses still manage important operations through email.

However, store managers and small business owners often receive too many messages and may miss urgent tasks.

This project provides a simple, low-cost, and customizable email triage workflow using Gmail and Google Apps Script.

## License

MIT
