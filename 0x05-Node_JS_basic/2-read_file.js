// Reading a file synchronously with Node.js

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
function countStudents(path) {
  if (path && typeof path === 'string') {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Cannot load the database');
      } else {
        const csv = data.trim();
        const lines = csv.split('\n');

        // Parse csv data to object/dictionary;
        const output = csvToObj(lines);

        // Pretty print output
        console.log(`Number of students: ${lines.length}`);
        for (const field of Object.keys(output)) {
          const size = output[field][0];
          const names = output[field][1].join(', ');
          console.log(`Number of students in ${field}: ${size}. List: ${names}`);
        }
      }
    });
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
