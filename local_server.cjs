const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;
const LIVE_BACKEND = 'https://pgsmwelfare.org';

const MIME_TYPES = {
    '.html': 'text/html; charset=UTF-8',
    '.htm':  'text/html; charset=UTF-8',
    '.js':   'application/javascript; charset=UTF-8',
    '.mjs':  'application/javascript; charset=UTF-8',
    '.cjs':  'application/javascript; charset=UTF-8',
    '.css':  'text/css; charset=UTF-8',
    '.json': 'application/json; charset=UTF-8',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif':  'image/gif',
    '.svg':  'image/svg+xml',
    '.ico':  'image/x-icon',
    '.pdf':  'application/pdf',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf':  'font/ttf',
    '.txt':  'text/plain; charset=UTF-8',
    '.csv':  'text/csv; charset=UTF-8'
};

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    const parsedUrl = new URL(req.url, 'http://' + (req.headers.host || 'localhost'));
    let reqPath = decodeURIComponent(parsedUrl.pathname);

    // Forward PHP API requests to live Hostinger backend
    if (reqPath.endsWith('.php')) {
        const targetUrl = new URL(reqPath, LIVE_BACKEND);
        parsedUrl.searchParams.forEach((val, key) => targetUrl.searchParams.set(key, val));

        const proxyHeaders = { ...req.headers, host: 'pgsmwelfare.org' };
        delete proxyHeaders['content-length'];

        const proxyReq = https.request(targetUrl.toString(), {
            method: req.method,
            headers: proxyHeaders
        }, (proxyRes) => {
            res.writeHead(proxyRes.statusCode, proxyRes.headers);
            proxyRes.pipe(res);
        });

        proxyReq.on('error', (err) => {
            console.error('Proxy Error:', err.message);
            res.writeHead(502, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: 'Live Backend Proxy Error: ' + err.message }));
        });

        req.pipe(proxyReq);
        return;
    }

    if (reqPath === '/' || reqPath === '') {
        reqPath = '/index.html';
    }

    let filePath = path.join(ROOT_DIR, reqPath);
    if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
        filePath += '.html';
    }

    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.end('<h1 style="color:#F36F21;text-align:center;margin-top:50px;">404 - Not Found</h1><p style="text-align:center;">URL: ' + reqPath + '</p>');
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
            'Content-Type': contentType,
            'Content-Length': stats.size,
            'Cache-Control': 'no-cache'
        });

        fs.createReadStream(filePath).pipe(res);
    });
});

server.listen(PORT, () => {
    console.log('PGSM Welfare Local Server running at http://localhost:' + PORT);
});
