// Using process stdin

process.stdin.resume();
process.stdin.setEncoding('utf-8');

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data !== null) {
    // process.stdout.write(`Your name is: ${data}`);
    console.log(`Your name is: ${data.trimEnd()}`);
  }
});

process.on('exit', () => console.log('This important software is now closing'));
