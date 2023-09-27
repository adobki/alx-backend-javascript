// Handles a resolved promise using then

export default function handleResponseFromAPI(promise) {
  promise.then({
    status: 200,
    body: 'Success',
  });
  promise.catch(new Error());
  promise.finally(console.log('Got a response from the API'));
}
