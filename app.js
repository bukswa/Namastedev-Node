console.clear();
console.log("\n\n\n\n");
/**
 *
 *
 *-------------------------------------------------------------------------------------
 */
require("./xyz");
const { multiply, sum, x } = require("./calculate");
const jsonData = require("./data.json");

// console.log(globalThis === global);
console.log(sum(2, 3));
console.log(multiply(2, 56));
console.log({ jsonData });

console.log(__filename);
console.log(__dirname);

/**---------------------------------------------------------------------------------------------
 *
 *
 *
 */
console.log("\n\n\n\n");
