function sum(a, b) {
  return a + b;
}

const x = 10;

module.exports = { sum }; // works
module.exports.x = x; // this also works
