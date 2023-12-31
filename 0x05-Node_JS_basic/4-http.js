// Create a small HTTP server using Node's HTTP module

const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

/**
 * A Node.js server application.
 */
const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello Holberton School!');
})
  .listen(port, hostname, () => {
    console.log('Welcome to my server!');
  });

module.exports = app;
