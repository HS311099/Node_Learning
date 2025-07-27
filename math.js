const add = (a, b) => {
   return a + b
};

const subs = (a, b) => {
   return a - b
};
const div = (a, b) => {
   return a / b
};

const mult = (a, b) => {
   return a * b
};

const PI = 3.14;

// module.exports.add = add;
// This code defines a function to add two numbers and exports it for use in other files.

module.exports = {add, subs, div, mult, PI};
// This code exports multiple functions using an object, allowing them to be imported in other files.