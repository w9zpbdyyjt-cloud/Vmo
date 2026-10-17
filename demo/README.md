VEXORA Studio demo

This folder contains a small local demo site for the VEXORA Studio UI. It is intended for local testing only and uses temporary numeric keys 1-10.

How to run locally:

1. Install dependencies (from project root):
   npm install

2. Run the demo server:
   npm run demo

3. Open the site on your computer browser: http://localhost:3001

To open on your iPhone (same Wi-Fi network):
- Find your computer's local IP address (e.g., 192.168.1.55).
- Open Safari on iPhone and go to: http://192.168.1.55:3001

Alternatively, use ngrok for HTTPS exposure:
- npm i -g ngrok
- ngrok http 3001
- Use the provided https URL on your iPhone.

Important notes:
- The demo accepts only digits 1-10 as temporary keys. They are NOT secure and should NOT be used for any real authentication.
- No payment, phone number, or personal data is requested by this demo.
- All saved projects are stored locally in the browser (localStorage) for demo purposes.
