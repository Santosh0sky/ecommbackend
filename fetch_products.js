const http = require('http');

http.get('http://localhost:3000/api/products', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers['content-type']);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('--- body start ---');
    console.log(data);
    console.log('--- body end ---');
  });
}).on('error', (err) => {
  console.error('request error:', err.message);
});
