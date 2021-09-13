const { readFile, writeFile } = require('fs');
console.log('Start');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      './content/result-async.txt',
      `here is the result ${first} ${second} `,
      (err, result) => {
        err ? console.log(err) : console.log(result);
      }
    );
    console.log('Done with this task');
  });
});

console.log('Starting a new task');
