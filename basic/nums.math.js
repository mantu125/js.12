// Numbers and maths .js

const score = 400
// console.log(score); // 400

const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString()); // 100
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // 100.00
// console.log(balance.toFixed(1)); // 100.0

const otherNumber = 23.8662

// console.log(otherNumber.toPrecision(5)); // 23.866
// console.log(otherNumber.toPrecision(3)); // 23.9

const otherNumberOne = 123.8663

// console.log(otherNumberOne.toPrecision(5)); // 123.87
// console.log(otherNumberOne.toPrecision(3)); // 124

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-NP')); // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
// console.log(hundreds.toLocaleString()); // 1,000,000

// +++++++++++ Maths ++++++++++++

// console.log(Math); // Object [Math] {}
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.9)); // 4
// console.log(Math.min(4,3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

// console.log(Math.random()); // 0.7913072810768167 random
// console.log((Math.random()*10) + 1); // 4.173348776013771 random
// console.log(Math.floor(Math.random()*10) + 1); // 3 random

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1)); // 0.3261835766667571 random
console.log(Math.floor(Math.random() * (max - min + 1))); // 0 random
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 19 random

