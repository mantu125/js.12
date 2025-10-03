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

console.log(this); // {}
