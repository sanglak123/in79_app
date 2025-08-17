// server.js
const http = require('http');
const dotenv = require("dotenv");
dotenv.config();
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const host = '127.0.0.1' // Passenger proxy được nội bộ, để như vậy là chuẩn

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = http.createServer((req, res) => handle(req, res));
  server.listen(port, host, () => {
    console.log(`> Ready on http://${host}:${port}`);
  })
})
