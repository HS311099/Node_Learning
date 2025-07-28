// 3 ways to export in ES6
// 1. Named exports
// 2. Default export
// 3. Export all

// 1. Named export
export const add = (a, b) => {
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

// 2. Default export
// export default subs;

// 3. Export all
export { subs, div, mult, PI };