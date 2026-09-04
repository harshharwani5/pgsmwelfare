const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split('?')[0];
  if (reqUrl === '/') {
    reqUrl = '/index.html';
  } else if (reqUrl === '/gym' || reqUrl === '/home' || reqUrl === '/website1' || reqUrl === '/v1') {
    reqUrl = '/gym_home.html';
  } else if (reqUrl === '/website2' || reqUrl === '/v2' || reqUrl === '/gym_v2') {
    reqUrl = '/gym_home_v2.html';
  } else if (reqUrl === '/website3' || reqUrl === '/v3' || reqUrl === '/gym_v3') {
    reqUrl = '/gym_home_v3.html';
  } else if (reqUrl === '/classes') {
    reqUrl = '/classes.html';
  } else if (reqUrl === '/classes_v2') {
    reqUrl = '/classes_v2.html';
  } else if (reqUrl === '/classes_v3') {
    reqUrl = '/classes_v3.html';
  } else if (reqUrl === '/membership' || reqUrl === '/pricing') {
    reqUrl = '/membership.html';
  } else if (reqUrl === '/membership_v2') {
    reqUrl = '/membership_v2.html';
  } else if (reqUrl === '/membership_v3') {
    reqUrl = '/membership_v3.html';
  }
  const filePath = path.join(__dirname, decodeURIComponent(reqUrl));
  const extname = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('404 Not Found');
      } else {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=UTF-8' });
        res.end('Server error: ' + error.code);
      }
    } else {
      res.writeHead(200, { 
        'Content-Type': contentType,
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log('Server is running at http://localhost:' + PORT + '/');
});
