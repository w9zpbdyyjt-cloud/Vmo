# VEXORA — Run & Demo Instructions

This document explains how to run the local demo UI and the bot for VEXORA.

Important safety notes
- NEVER commit real secrets (bot token, client secret, database URL) into the repository.
- The demo uses temporary numeric keys (1-10) for local testing only. Do NOT use them in production or to protect real data.

Prerequisites
- Node.js 16+ installed
- npm
- (Optional) pm2 for process management: `npm i -g pm2`
- (Optional) ngrok if you need HTTPS tunneling to your local machine: https://ngrok.com

Setup
1. Copy the example env file and fill the values (do not commit this file):

   cp .env.example .env
   # Edit .env and put your DISCORD_TOKEN, CLIENT_ID, GUILD_ID, etc.

2. Install dependencies:

   npm install

Demo UI (local)
1. Start the demo server (serves a local demo UI that accepts numeric keys 1-10):

   npm run demo

2. Open the demo in your browser at:

   http://localhost:3001

3. To open on your iPhone (must be on the same Wi-Fi network as your computer):
   - Get your computer's local IP address (e.g., 192.168.1.55).
   - On the iPhone, open Safari and visit: http://<YOUR_COMPUTER_IP>:3001

4. If you need HTTPS (for iPhone geolocation or secure contexts), use ngrok:

   npm i -g ngrok
   ngrok http 3001
   # Open the HTTPS URL ngrok provides on your iPhone

Running the bot locally
1. Make sure your .env is set and contains the Discord token and IDs.
2. Register slash commands (for development/test guild):

   npm run register

3. Start the bot:

   npm start

Using PM2 (optional)
You can use pm2 to run both the demo and the bot and keep them alive across reboots.

1. Install pm2 globally if you haven't:
   npm i -g pm2

2. Start the processes using the provided ecosystem file:
   pm2 start ecosystem.config.js

3. View logs:
   pm2 logs

4. Stop:
   pm2 stop ecosystem.config.js

Procfile (Heroku/Render)
A simple Procfile is provided if you deploy to a platform that reads Procfile entries.

Security checklist before publishing publicly
- Replace demo numeric keys with a real authentication mechanism (Discord OAuth2 or other).
- Move from localStorage to a real database before storing user or project data.
- Store secrets in environment variables / secret manager on the host — do not commit them.

If you need help setting up the bot registration (CLIENT_ID, GUILD_ID) or inviting the bot with
`applications.commands` scope, ask and I will provide detailed steps.
