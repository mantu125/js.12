// array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[0]); // 0
// console.log(myArr[1]); // 1
// console.log(myArr[2]); // 2
// console.log(myArr[3]); // 3
// console.log(myArr[4]); // 4
// console.log(myArr[5]); // 5

const myHeros = ["shaktiman", "naagraj"]
// console.log(myHeros[0]); // shaktiman
// console.log(myHeros[1]); // naagraj

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[1]); // 1

// Array methods

// myArr.push(6) // add value 6
// myArr.push(7) // add value 7
// myArr.pop() // remove last value
// console.log(myArr);

// myArr.unshift(10) // [ 10, 0, 1, 2,  3, 4, 5 ]  
// myArr.unshift(9) // [ 9, 10, 0, 1, 2,  3, 4, 5 ] 
// myArr.shift() // Remove the first value of array 
// console.log(myArr);
// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(10)); // -1
// console.log(myArr.indexOf(5)); // 5


const newArr = myArr.join()
// console.log(newArr); // 0,1,2,3,4,5 typeof (String) joined also
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

// slice, splice
console.log("A", myArr); // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) 
console.log(myn1); // [ 1, 2 ] not add last number
console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log("C", myArr); // [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ] all

// Array

const marvel_heros = ["Thor", "Ironman", "Spyderman"]
const dc_heros = ["Batman", "Flash", "superman"]
