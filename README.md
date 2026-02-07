# 🛡️ Secure SQL AI Assistant
A Full-Stack NL2SQL (Natural Language to SQL) translator powered by Gemini AI.

## 🚀 Overview
This application allows users to ask questions in plain English and receive secure, validated SQL queries. It features a custom security layer to prevent destructive commands like `DROP` or `DELETE`.

## ✨ Key Features
* **AI Translation:** Uses Gemini 2.5 Flash to convert text to SQL.
* **Security Guardrail:** A custom Node.js middleware that parses SQL to ensure only `SELECT` statements are allowed.
* **React Interface:** A modern, Gemini-inspired chat UI.

## 🛠️ Tech Stack
* **Frontend:** React.js, CSS3
* **Backend:** Node.js, Express
* **AI:** Google Generative AI (Gemini API)
* **Security:** SQL-Parser

## 📸 Screenshots / Demo
![App Preview](link-to-your-screenshot-or-gif.png)

## ⚙️ Local Setup
1. Clone the repo: `git clone ...`
2. Install Backend: `cd backend && npm install`
3. Add your `.env` with `GEMINI_API_KEY`.
4. Run: `node server.js`
5. 
