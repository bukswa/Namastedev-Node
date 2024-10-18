console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n");

const fs = require("fs");
const https = require("https");

console.log("hello world!");

https.get(
  "https://dummyjson.com/RESOURCE/?limit=10&skip=5&select=key1,key2,key3",
  (res) => {
    console.log("data fetched successfully");
  }
);

const data = fs.readFileSync("./file.txt", "utf8");
console.log("file Data:", data);

console.log("block the main thread");
