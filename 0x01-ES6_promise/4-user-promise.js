// Simple fulfilled promise

export default function signUpUser(firstname, lastname) {
  return Promise.resolve({
    firstname: firstname,
    lastname: lastname,
  });
}
