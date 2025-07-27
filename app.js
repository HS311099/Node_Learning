// const add = require('./math.js');
// This code imports the add function from math.js and uses it to add two numbers.

// importing multiple functions from math.js
// const { add, subs, div, mult, PI } = require('./math.js');
// This code imports multiple functions from math.js using destructuring assignment.


// console.log(add(5, 10));
// console.log(subs(5, 10));
// console.log(div(5, 10));
// console.log(mult(5, 10));
// This code imports the add, subs, div, mult functions and PI constant from math.js and logs the results of their operations.
// console.log(PI);
// This code logs the value of PI from math.js.
// This code imports the PI constant from math.js and logs its value.

// object destructuring
const math = require('./math.js');

console.log(math.add(5, 10));
console.log(math.subs(5, 10));
console.log(math.div(5, 10));
console.log(math.mult(5, 10));
console.log(math.PI);
// This code imports the math module and uses its functions and constant to perform operations and log results