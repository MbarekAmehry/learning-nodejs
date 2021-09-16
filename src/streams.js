const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('./content/doc.txt', 'utf8');
const writeStream = createWriteStream('./content/docNew-2.txt', 'utf8');

// readStream.on('data', (chunk) => {
//   console.log('----NEW CHUNK----');
//   console.log(chunk);
//   // writing every chunk to docNew
//   writeStream.write('\nNEW LINE\n');
//   writeStream.write(chunk);
// });

// Alternatively we can pipe every chunk to a new file with single line
readStream.pipe(writeStream);
