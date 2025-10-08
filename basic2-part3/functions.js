function sayMyName(){
    console.log("M"); // M
    console.log("N"); // A
    console.log("A"); // N
    console.log("T"); // T 
    console.log("U"); // U
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers() // NaN
// addTwoNumbers(3, 4) // 7
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, "a") // 3a
// addTwoNumbers(3, null) // 3

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result); // Result:  undefined

function addTwoNumbers(number1, number2){
        // let result = number1 + number2
        // return result
        return number1 + number2
}
//  console.log("Result: ", result); // Result:  8

// function loginUserMessage(username){
function loginUserMessage(username = "sam"){ // sam just logged in
    if(!username){
        console.log("please enter a username"); // please enter a username
        return //undefined
    }
    // if(username===undefined){
    //     console.log("please enter a username"); // please enter a username
    //     return //undefined
    // }
    return `${username} just logged in`
}
// console.log(loginUserMessage("hitesh")); // hitesh just logged in
// console.log(loginUserMessage("")); //  just logged in
// console.log(loginUserMessage()); // undefined just logged in

// function calculateCartPrice(...num1){ // [ 200, 400, 500, 5050 ]
// function calculateCartPrice(num1){ // 200
function calculateCartPrice(val1, val2, ...num1){ // [ 500, 5050 ]
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 5050)); 

const user = {
    username: "hitesh",
    Price: 199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.Price}`); // username is hitesh and price 199
}
// handleobject(user)
handleobject({ // username is sam and price 399
    username: "sam",
    Price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1] 
}
// console.log(returnSecondValue(myNewArray)); // 400
