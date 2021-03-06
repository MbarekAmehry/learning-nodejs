const { createServer } = require('http');
const { readFile } = require('fs');

const server = createServer((req, res) => {
  // Set header content type
  res.setHeader('content-Type', 'text/html');

  let path = './views/';

  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  // send an html file
  readFile(path, (err, data) => {
    err ? console.log(err) : res.end(data);
  });
});

server.listen(5000, 'localhost', () => {
  console.log('Listening on port 5000..');
});
