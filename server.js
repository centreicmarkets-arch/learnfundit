const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(fs.readFileSync(path.join(__dirname, 'index.html')));
}).listen(process.env.PORT || 8080);

console.log('Server running on port', process.env.PORT || 8080);
