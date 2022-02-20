// First option to display the file system
const { readFile, writeFile } = require("fs");
//  Array destructuring

readFile("./content/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = data;

  readFile("./content/second.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = data;
    writeFile(
      "./content/resultSync.txt",
      `Here is the Result : ${first} , ${second}`,
      (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(data);
      }
    );
  });
});

// Second  option to displat the file system
// const fs = require("fs");

// const first = fs.readFileSync("./content/first.txt", "utf-8");
// const second = fs.readFileSync("./content/second.txt", "utf-8");

// console.log(first, second);

// writeFileSync(
//   "./content/resultSync.txt",
//   `Here is the Result : ${first} , ${second}`,
//   { flag: "a" }
// );
