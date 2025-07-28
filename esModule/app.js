// 2 ways to import in ES6
// 1. Named imports
import {mult, PI, add, div, subs} from './math.js';
// 2. Import all
// import * as math from './math.js';
import * as math from './math.js';

// 1. Using named imports
console.log(add(5, 10));

// 2. importing all using import * as math
console.log(math.subs(5, 10));

// console.log(div(5, 10));
// console.log(mult(5, 10));
// console.log(PI);
// This code imports the math module and uses its functions and constant to perform operations and log results
