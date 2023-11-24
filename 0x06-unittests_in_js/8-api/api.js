// Basic integration testing with Express and request

const express = require('express');

const app = express();
const port = 7865;

/**
 * Logs a request summary to the console after a request is made to an Express API.
 * @param {Response} response - A response object from an API call.
 */
function logRequest(response) {
  if (response.req.params.length) {
    console.log(response.req.method, `"${response.req.url}"`, response.req.params, response.statusCode);
  } else {
    console.log(response.req.method, `"${response.req.url}"`, response.statusCode);
  }
}

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
  if (response.statusCode === 304) response.statusCode = 200; // Ignore redirect on trailing slash
  logRequest(response);
});

app.get('*', (request, response) => {
  response.status(404).send('Error: 404 Not found!');
  logRequest(response);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
