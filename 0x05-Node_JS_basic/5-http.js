// Create a more complex HTTP server using Node's HTTP module

const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;

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
 * A Node.js HTTP server application.
 */
const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') response.write('Hello Holberton School!');
  if (request.url === '/students') {
    // process.stdin.read();
    try {
      await countStudents('database.csv').then((data) => response.write(data));
    } catch (err) {
      console.log(err);
      response.write('This is the list of our students\n');
    }
  }
  response.end();
})
  .listen(port, hostname, () => {
    console.log('Welcome to my server!');
  });

module.exports = app;
