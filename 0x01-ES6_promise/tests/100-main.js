// Tests the code in the referenced script(s)

/* eslint-disable import/extensions */
import asyncUploadUser from "../100-await.js";

const test = async () => {
    const value = await asyncUploadUser();
    console.log(value);
};

test();
