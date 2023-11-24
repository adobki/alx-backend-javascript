// Deep equality and post integration testing with Express and request

const express = require('express');

const app = express();
const port = 7865;

/**
 * Logs a request summary to the console after a request is made to an Express API.
 * @param {Response} response - A response object from an API call.
 */
function logRequest(response) {
  if (Object.keys(response.req.params).length) {
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

app.get('/cart/:id(\\d+)', (request, response) => {
  response.send(`Payment methods for cart ${request.params.id}`);
  if (response.statusCode === 304) response.statusCode = 200; // Ignore redirect on trailing slash
  logRequest(response);
});

app.get('/available_payments', (request, response) => {
  response.send({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
  if (response.statusCode === 304) response.statusCode = 200; // Ignore redirect on trailing slash
  logRequest(response);
});

app.use(express.json());
app.post('/login', (request, response) => {
  const name = request.body.userName;
  if (name) {
    response.send(`Welcome ${name}`);
    response.req.params = { userName: name };
  } else response.status(401).send('Error: Unauthorised!');

  if (response.statusCode === 304) response.statusCode = 200; // Ignore redirect on trailing slash
  logRequest(response);
});

app.all('*', (request, response) => {
  response.status(404).send('Error: 404 Not found!');
  logRequest(response);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
