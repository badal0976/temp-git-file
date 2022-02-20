// The Path module provides a way of working with directories and file paths.
const path = require('path');

console.log(path.sep);

const filePath = path.join('./content','subfolder','test.txt')
console.log(filePath);

const baseName = path.basename(filePath)
console.log(baseName);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);