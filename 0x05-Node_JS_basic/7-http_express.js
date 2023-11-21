// Create a more complex HTTP server using Express

const express = require('express');
const fs = require('fs');

/**
 * Parses an array of CSVs and returns an object with statistics.
 *
 * @param {Array<string>} csv Array of CSV data.
 * @return {object} {field: [count, [firstnames]], field: [count, [firstnames]], ...}.
 */
function csvToObj(csv) {
  // Validate column names and get indexes of field and firstname columns
  const headings = csv.shift().split(',');
  const idxField = headings.findIndex((val) => val === 'field');
  const idxFirst = headings.findIndex((val) => val === 'firstname');
  if (idxField === -1 || idxFirst === -1) {
    throw new Error('Cannot load the database');
  }

  // Parse array to object/dictionary output
  const output = {};
  for (let line of csv) {
    line = line.split(',');
    // Validate number of columns in row/line then add it to output
    if (line.length === 4) {
      if (output[line[3]]) {
        output[line[3]][0] += 1;
        output[line[3]][1].push(line[idxFirst]);
      } else {
        output[line[3]] = [1, [line[idxFirst]]];
      }
    }
  }
  return output;
}

/**
 * Reads a CSV file synchronously and pretty prints statistics from it.
 *
 * @param {string} path Relative path to a CSV database file.
 */
async function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path || typeof path !== 'string') reject(Error('Cannot load the database'));
    fs.readFile(path, 'utf-8', (err, data) => {
      let output = 'This is the list of our students';
      if (err) {
        reject(Error('Cannot load the database'));
      } else {
        const csv = data.trim();
        const lines = csv.split('\n');

        // Parse csv data to object/dictionary;
        const stats = csvToObj(lines);

        // Pretty print output
        output += `\nNumber of students: ${lines.length}`;
        for (const field of Object.keys(stats)) {
          const size = stats[field][0];
          const names = stats[field][1].join(', ');
          output += `\nNumber of students in ${field}: ${size}. List: ${names}`;
        }
      }
      return resolve(output);
    });
  });
}

/**
 * An Express HTTP server application.
 */
const app = express();
const port = 1245;

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', async (request, response) => {
  try {
    await countStudents('database.csv').then((data) => response.send(data));
  } catch (err) {
    console.log(err);
    response.send('This is the list of our students\n');
  }
});

app.listen(port, () => {
  console.log(`Welcome to my server! Listening on port ${port}`);
});

module.exports = app;
