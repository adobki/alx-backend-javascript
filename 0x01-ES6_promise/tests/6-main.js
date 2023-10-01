// Tests the code in the referenced script(s)

/* eslint-disable import/extensions */
import handleProfileSignup from '../6-final-user.js';

console.log(handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg'));

handleProfileSignup('Bob', 'Dylan', 'bob_dylan.jpg')
  .then((data) => console.log(data));
