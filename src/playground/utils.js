console.log('utils.js is running');

export const square = (x) => x * x;

export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

//named export
//export { square, add, subtract as default };

export default subtract;

// export default (a, b) => a - b;

