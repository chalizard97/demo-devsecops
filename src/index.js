const http = require('http');
const PORT = process.env.PORT || 3333;
http.createServer((req, res) => {
  res.end('Hello from DevSecOps Demo! 123');
}).listen(PORT, () => console.log(`Listening on ${PORT}`));