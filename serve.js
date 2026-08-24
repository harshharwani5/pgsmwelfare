const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const MIME_TYPES = {
  'html': 'text/html; charset=UTF-8',
  .js': 'text/javascript',
  '.css': 'text/css',
  .json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  .ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') {
    reqUrl = '/pgsm_hero.html';
  }
  const filePath = path.join(__dirname, decodeURIComponent(reqUrl));
  const extname = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500);
        res.end('Server error: ' + error.code);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log('Server is running at http://localhost:' + PORT + '/');
});
