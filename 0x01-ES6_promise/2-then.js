// Resolved, rejected and finally responses in a fulfiled promise using then

export default function handleResponseFromAPI(promise) {
  const resp = {
    status: 200,
    body: 'success',
  };
  return promise.then(
    () => resp,
    () => new Error(),
    console.log('Got a response from the API'),
  );
}
