// Handle multiple promises

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstname, lastname, filename) {
  const signedUp = await signUpUser(firstname, lastname).then(
    (data) => ['fulfilled', data],
    (err) => ['rejected', err.toString()],
  );
  const photo = await uploadPhoto(filename).then(
    (data) => ['fulfilled', data],
    (err) => ['rejected', err.toString()],
  );

  return [
    {
      status: signedUp[0],
      value: signedUp[1],
    },
    {
      status: photo[0],
      value: photo[1],
    },
  ];
}
