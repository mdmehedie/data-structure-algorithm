const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-Tpe': 'text/html' });
  fs.readFile('index.html', function (err, data) {
    if (err) {
      res.writeHead(404);
      res.write('Error : file not found');
    } else {
      res.write(data);
    }
  });
  res.end();
});

server.listen(port, function (err) {
  if (err) {
    console.log('Something went wwrong', err);
  } else {
    console.log('Serve is listening on port' + port);
  }
});
