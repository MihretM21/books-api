# AI Chat App

A simple chat app built with plain HTML, CSS and JavaScript. You type a message, the app sends it to an AI model through an API using `fetch()`, and the reply appears in a running conversation.

Built as an assignment for the Hiruy Full-Stack Bootcamp.

## Features
- Chat interface with your messages and the AI's replies in one conversation
- Sends each message to the AI API with `fetch()` and `async/await`
- Shows the AI's reply on the page as soon as it arrives
- Works in the browser, with no framework and no build step

## Built with
- HTML (`index.html`) for the page structure
- CSS (`style.css`) for the layout and styling
- JavaScript (`script.js`) for sending messages, calling the API and showing replies
- [Groq API](https://console.groq.com) as the AI provider (free tier, OpenAI-compatible format)
- Model: `openai/gpt-oss-20b`

## Project structure
```
ai-chat-app/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to run it
1. Download or clone this repository:
   ```
   git clone https://github.com/MihretM21/ai-chat-app.git
   ```
2. Get a free API key at [console.groq.com](https://console.groq.com).
3. Open `script.js` and put your key in the `API_KEY` line:
   ```js
   const API_KEY = "your-groq-api-key-here";
   ```
4. Open `index.html` in your browser (or use the VS Code **Go Live** button).
5. Type a message and press **Send**.

## API key safety
The real API key is **not** stored in this repository. The `API_KEY` line holds only a placeholder, and you add your own key on your computer. Never commit a real key to GitHub, because anyone could use it.

## How it works
1. The user types a message and clicks **Send**.
2. `script.js` adds the message to the chat on the page.
3. `fetch()` sends the conversation to the Groq API, with the key in the `Authorization` header.
4. The API answers with JSON. The script reads the reply text from the response.
5. The reply is shown in the chat.
6. If the request fails, the app shows an error message instead of waiting forever.

## What I learned
- How to call a web API with `fetch()` and `async/await`
- How a request and a JSON response are structured
- Why API keys must be kept out of public repositories
- How to switch between AI providers (I first tried Gemini, then moved to Groq)
- How to work with git and GitHub: commits, branches and pull requests

## Author
Mihret Dula, [@MihretM21](https://github.com/MihretM21)
