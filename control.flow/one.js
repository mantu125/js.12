// if

// not execute
// if (false) {    
// }

const isUserloggedIn = true
const temperature = 48

// if (2 == "2") {
//     console.log("executed"); // executed
// }

// 2<=2
// 3 !=2
// <, >, <=, >=, ==, !=, ===, !== 

if(temperature < 50){
// if (temperature === 48){
    // console.log("less than 50"); // less than 50
} else {
    // console.log("temperature is greater than 50");
}
// console.log("temperature is greater than 50"); // temperature is greater than 50

// console.log("Execute"); // Execute


const score = 200

if (score) {
    // var power = "fly"
    const power = "fly"
    // console.log(`User power: ${power}`); // User power: fly
}
// console.log(`User power: ${power}`); // not defined

const balance = 1000

// if (balance > 500) console.log("test"); // test

// if (balance < 500) {
//     console.log("less than 500")
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 900");
// } else if (balance < 1200) {
//     console.log("less than 1200"); // less than 1200
// }

const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInfromEmail = true

// if (userloggedIn && debitCard) {
// if (userloggedIn && debitCard && 2==2) {
if (userloggedIn && debitCard && 2==3) { // not execute
    console.log("Allow to buy course"); // Allow to buy course
}

if (loggedInFromGoogle || loggedInfromEmail) {
    console.log("user logged in"); // user logged in
}