// First option to display the file system
const { readFileSync, writeFileSync } = require("fs");
//  Array destructuring

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second);

// Second  option to displat the file system
// const fs = require("fs");

// const first = fs.readFileSync("./content/first.txt", "utf-8");
// const second = fs.readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);

writeFileSync(
  "./content/resultSync.txt",
  `Here is the Result : ${first} , ${second}`,
  { flag: "a" }
);
