// Handles multiple successful promises

import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    let mes = `${(await uploadPhoto()).body} `;
    mes += [...Object.values((await createUser()))].join(' ');
    console.log(mes);
  } catch (e) {
    console.log('Signup system offline');
  }
}
