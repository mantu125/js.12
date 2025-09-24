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
// console.log("A", myArr); // A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) 
// console.log(myn1); // [ 1, 2 ] not add last number
// console.log("B", myArr); // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
// console.log("C", myArr); // [ 0, 4, 5 ]
// console.log(myn2); // [ 1, 2, 3 ] all

// Array

const marvel_heros = ["Thor", "Ironman", "Spyderman"]
const dc_heros = ["Batman", "Flash", "superman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros); // [ 'Thor', 'Ironman', 'Spyderman', [ 'Batman', 'Flash', 'superman' ] ] Joined
// console.log(marvel_heros[3][1]); // flash
 
// const allheros = marvel_heros.concat(dc_heros)
// console.log(allheros); // [ 'Thor', 'Ironman', 'Spyderman', 'Batman', 'Flash', 'superman' ] joined

// const all_new_heros =[...marvel_heros, ...dc_heros]
// console.log(all_new_heros); // [ 'Thor', 'Ironman', 'Spyderman', 'Batman', 'Flash', 'superman' ] 

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]
const real_anotherArray = anotherArray.flat(Infinity)
// console.log(real_anotherArray); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 11]

// console.log(Array.isArray("Mantu")) // false
// console.log(Array.from("Mantu")) // [ 'M', 'a', 'n', 't', 'u' ]
// console.log(Array.from({name: "Mantu"})) // []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
