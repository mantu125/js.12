const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // hitesh, welcome to website
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam" 
// user.welcomeMessage() // sam, welcome to website

// console.log(this); // {}

// function chai(){
//     let username = "Mantu"
//     console.log(this.username); // undefined
// }
// chai()

// const chai = function(){
//     let username = "Mantu"
//     console.log(this.username); // undefined
// }
// chai()

// const chai = () => {
//     let username = "Mantu"
//     console.log(this); // {}
//     console.log(this.username); // undefined
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4)); // 7

// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(4, 20)); // 24

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(4, 20)); // 24

// const addTwo = (num1, num2) => {username: "Mantu"}
// console.log(addTwo(4, 20)); // undefined
// const addTwo = (num1, num2) => ({username: "Mantu"})
// console.log(addTwo(4, 20)); // { username: 'Mantu' }

// const MyArray = [2, 5, 6, 8]
// MyArray.forEach()
