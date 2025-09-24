// datatypes-summary.js

// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false

// const bigNumber = 1233547896556655 // not bigInt
// const bigNumber = 1233547896556655n  // bigInt


// Reference (Non primitive)

// Array, Object, Function

const heros = ["shaktiman", "naagraj", "doga"];
let myObj ={
    name: "Mantu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");    
}

// console.log(typeof heros); // Object
// console.log(typeof outsideTemp); // object
// console.log(typeof scoreValue); // number
// console.log(typeof bigNumber); // BigInt
// console.log( typeof myFunction); // function
// console.log(typeof Symbol); // function

// ++++++++++++++++++++++++++++++++
    // Stack (Primitive) Copy , Heap (Non-Primitive) Reference

let myYoutubename="Mantudotcom" 

let anothername=myYoutubename
anothername="sahdotcom"

// console.log(myYoutubename); // Mantudotcom
// console.log(anothername); // sahdotcom

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email="mantu@google.com"

console.log(userOne.email);
console.log(userTwo.email);




