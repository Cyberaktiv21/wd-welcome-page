// WD Welcome Page Express Server
const express = require('express');
const path = require('path');
const app = express();

// Set static folder for all assets (HTML, CSS, images, JS)
app.use(express.static(path.join(__dirname, '.')));

// Serve index.html for root (optional, but friendly!)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// The port can be adjusted via env, default 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`WD Welcome Page server running at http://localhost:${PORT}`);
});

// Usage:
//   npm install
//   npm start
// Or: node server.js
