// Handles multiple successful promises

import { uploadPhoto, createUser } from "./utils.js";

export default async function handleProfileSignup() {
  let mes = `${(await uploadPhoto()).body} `;
  mes += [...Object.values((await createUser()))].join(' ');
  console.log(mes);
}
