// Create a small HTTP server using Express

const express = require('express');

/**
 * An Express HTTP server application.
 */
const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  response.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Welcome to my server! Listening on port ${port}`);
});

module.exports = app;
