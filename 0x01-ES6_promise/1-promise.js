// Returns a resolved promise. Resolution is based on given parameter

export default function getFullResponseFromAPI(success) {
  return new Promise((fulfil, reject) => {
    if (success) {
      fulfil({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
