// singleton 
// object.create support only singleton

//object literals

// const mySym = Symbol("key1")

// const JsUser = {
//     name: "Mantu",
//     "full name": "Mantu Sah",
//     [mySym]: "key1",
//     // mySym: "key1",
//     age: 20,
//     location: "Birgunj",
//     email: "mantu@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["monday", "saturday"]
// }

// console.log(JsUser.email); // mantu@google.com
// console.log(JsUser["email"]); // mantu@google.com
// console.log(JsUser["full name"]); // mantu@gmail.com
// console.log(JsUser.mySym); // key1
// console.log(JsUser[mySym]); // undefined
// console.log(typeof JsUser.mySym); // string

// console.log(JsUser[mySym]); // key1
// console.log(typeof JsUser[mySym]); // string

//  console.log(JsUser);
//  -print {
//   name: 'Mantu',
//   'full name': 'Mantu Sah',
//   age: 20,
//   location: 'Birgunj',
//   email: 'mantu@google.com',
//   isLoggedIn: false,
//   lastLoginDays: [ 'monday', 'saturday' ],
//   [Symbol(key1)]: 'key1'
// }
 
// JsUser.email = "mantu@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "mantu@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
    // console.log("hello JS user");
// }
// console.log(JsUser.greeting()); // hello JS user, undefined
// console.log(JsUser.greeting); // [Function (anonymous)]

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }
// console.log(JsUser.greeting()); // hello JS user
// console.log(JsUser.greetingTwo()); // Hello JS user, Mantu

