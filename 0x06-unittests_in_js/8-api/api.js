// Create a small HTTP server using Express

const express = require('express');

/**
 * An Express HTTP server application.
 */
const app = express();
const port = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system!');
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;