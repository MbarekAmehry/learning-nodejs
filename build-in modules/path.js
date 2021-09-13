const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/', 'sub-folder', 'test.txt');
console.log(path.basename(filePath));

const absolute = path.resolve(__dirname, 'content/', 'sub-folder', 'test.txt');

console.log(absolute);
