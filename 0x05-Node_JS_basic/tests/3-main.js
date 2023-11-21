// Tests the code in the referenced script(s)

const countStudents = require('../3-read_file_async');

countStudents('database.csv')
  .then(() => {
    console.log('Done!');
  })
  .catch((error) => {
    console.log(error);
  });
console.log('After!');
