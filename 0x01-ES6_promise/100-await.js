// Try/catch/finally

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let data;
  let user;
  let photo;

  try {
    user = await createUser().then((data) => data);
    photo = await uploadPhoto().then((data) => data);
    data = {
      photo,
      user,
    };
  } catch (err) {
    data = {
      photo: null,
      user: null,
    };
  }

  return data;
}
