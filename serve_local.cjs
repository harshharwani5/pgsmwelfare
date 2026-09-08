const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
    let rawUrl = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(__dirname, rawUrl === '/' ? 'index.html' : rawUrl);
    
    if (!fs.existsSync(filePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
    
    if (fs.statSync(filePath).isDirectory()) {
        filePath = path.join(filePath, 'index.html');
    }

    if (!fs.existsSync(filePath)) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
        'Content-Type': contentType,
        'Content-Length': stat.size
    });

    if (req.method === 'HEAD') {
        return res.end();
    }

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
});

server.listen(PORT, () => {
    console.log(`Local development server running at http://localhost:${PORT}/`);
});
