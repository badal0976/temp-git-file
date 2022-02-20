// CommonJs, Every file is module in nodes.js(by default)
// Modules-- Encapsulated code (Share Minimum)

const names = require("./2-file");
const sayHi = require("./app");
const data = require("./4-alternative");
console.log(data);
const additionPlus = require("./5-addition");
sayHi("badal");
sayHi(names.john);
sayHi(names.peter);
