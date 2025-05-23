// Script ini digunakan untuk cron-job.org atau layanan ping lainnya
// untuk menjaga website tetap aktif dan tidak "tidur"

/* eslint-disable no-undef */
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'ok',
    message: 'Scieforsea is alive',
    timestamp: new Date().toISOString()
  }));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  // Server running on the specified port
});
/* eslint-enable no-undef */
