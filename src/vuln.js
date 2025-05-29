// src/vuln.js
const http = require('http');

http.createServer((req, res) => {
  // Unsafe: executing whatever comes after “?cmd=”
  const query = new URL(req.url, `http://localhost`).searchParams;
  const cmd = query.get('cmd') || '';
  try {
    const result = eval(cmd);  
    res.end(`Result: ${result}`);
  } catch (e) {
    res.end(`Error: ${e.message}`);
  }
}).listen(4000, () => {
  console.log('Vuln server listening on port 4000');
});