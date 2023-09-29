// Handle multiple promises

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstname, lastname, filename) {
  const returnArray = [];
  returnArray.push(await signUpUser(firstname, lastname));
  returnArray.push(await uploadPhoto(filename));
  return returnArray;
}
