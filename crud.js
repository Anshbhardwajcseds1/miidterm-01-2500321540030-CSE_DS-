const fs = require("fs");

// 1. CREATE
fs.writeFileSync("demo.txt", "Hello World!");
console.log("1. File Created");

// 2. READ
const data = fs.readFileSync("demo.txt", "utf8");
console.log("2. File Read:", data);

// 3. UPDATE
fs.appendFileSync("demo.txt", " Welcome to Node.js");
console.log("3. File Updated:", fs.readFileSync("demo.txt", "utf8"));

// 4. DELETE
fs.unlinkSync("demo.txt");
console.log("4. File Deleted");