const name = "Mantu"
const repoCount = 50

// console.log(name + repoCount + " Value"); not good

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is Mantu and my repo count is 50

const gameName = new String('MantuABC')

// console.log(gameName[0]); // M
// console.log(gameName.__proto__); // {}

// console.log(gameName.length); // 8
// console.log(gameName.toUpperCase()); // Makes uppercase words (MANTUABC)
console.log(gameName.charAt(2)); // n
console.log(gameName.indexOf('n')); // 2

const newString = gameName.substring(0,3) // Support only positive values
console.log(newString); // Man

const anotherString = gameName.slice(-8, 5) // Supports negative values also
console.log(anotherString); // Mantu

const newStringOne = "      mantu       "
console.log(newStringOne); //       mantu       
console.log(newStringOne.trim()); // mantu

const url = "https://mantu.com/mantu%20sah"

console.log(url.replace('%20', '_')); // https://mantu.com/mantu_sah

console.log(url.includes('mantu')); // true
console.log(url.includes('ram')); // false

console.log(gameName.split('_')); // [ 'MantuABC' ]
console.log(gameName.split("7")); // [ 'MantuABC' ]


