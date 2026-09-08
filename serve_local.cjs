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

const https = require('https');

const server = http.createServer((req, res) => {
    let rawUrl = decodeURIComponent(req.url.split('?')[0]);

    // Localhost handler for create_order.php
    if (rawUrl === '/create_order.php' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const parsed = JSON.parse(body || '{}');
                const amt = parsed.amount ? parseFloat(parsed.amount) : 500;
                const amtPaise = Math.round(amt * 100);
                const title = parsed.title || 'Donation for Rural Upliftment';

                const keyId = 'rzp_live_TZYodTojrVGsKI';
                const keySecret = Buffer.from('WEZ3NUlmdHJySHhsclFRU25adGV4MXRF', 'base64').toString('ascii');
                const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64');

                const payload = JSON.stringify({
                    amount: amtPaise,
                    currency: 'INR',
                    receipt: 'rcpt_' + Date.now(),
                    payment_capture: 1,
                    notes: { cause: title, organization: 'PGSM Welfare Society' }
                });

                const rzpReq = https.request({
                    hostname: 'api.razorpay.com',
                    path: '/v1/orders',
                    method: 'POST',
                    headers: {
                        'Authorization': 'Basic ' + auth,
                        'Content-Type': 'application/json',
                        'Content-Length': Buffer.byteLength(payload)
                    }
                }, (rzpRes) => {
                    let rzpData = '';
                    rzpRes.on('data', c => rzpData += c);
                    rzpRes.on('end', () => {
                        res.writeHead(rzpRes.statusCode || 200, {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        });
                        try {
                            const resObj = JSON.parse(rzpData);
                            resObj.key = keyId;
                            res.end(JSON.stringify(resObj));
                        } catch(e) {
                            res.end(rzpData);
                        }
                    });
                });

                rzpReq.on('error', (e) => {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: true, message: e.message }));
                });

                rzpReq.write(payload);
                rzpReq.end();
            } catch(err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: true, message: err.message }));
            }
        });
        return;
    }

    // Localhost handler for submit_volunteer.php
    if (rawUrl === '/submit_volunteer.php' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const parsed = JSON.parse(body || '{}');
                console.log('Volunteer Application Received locally:', parsed);

                // Write to local volunteers.csv
                const csvPath = path.join(__dirname, 'volunteers.csv');
                const isNew = !fs.existsSync(csvPath);
                const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) + ' IST';
                let line = `"${timestamp}","${parsed.fullName || ''}","${parsed.whatsapp || ''}","${parsed.email || ''}","${parsed.status || ''}","${parsed.interest || ''}","${(parsed.motivation || '').replace(/"/g, '""')}","127.0.0.1"\n`;
                if (isNew) {
                    fs.writeFileSync(csvPath, '\uFEFFTimestamp,Full Name,WhatsApp,Email,Status,Area of Interest,Motivation,IP Address\n' + line, 'utf8');
                } else {
                    fs.appendFileSync(csvPath, line, 'utf8');
                }

                res.writeHead(200, {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                });
                res.end(JSON.stringify({
                    success: true,
                    message: 'Volunteer application submitted successfully!',
                    logged: true
                }));
            } catch(e) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: e.message }));
            }
        });
        return;
    }

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
