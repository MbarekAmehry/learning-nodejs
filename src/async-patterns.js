const { readFile, writeFile } = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    await writeFile('./content/first.txt', 'This is getting REALLY fun!!!', {
      flag: 'a',
    });
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');

    console.log(first, second);
  } catch (error) {
    console.log(err);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       err ? reject(err) : resolve(data);
//     });
//   });
// };

// getText('./content/second.txt')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
