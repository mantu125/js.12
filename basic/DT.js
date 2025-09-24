// Dates and Times

let myDate = new Date()
// console.log(myDate.toLocaleString()); // 9/24/2025, 7:32:31 AM
// console.log(myDate.toString()); // Wed Sep 24 2025 07:29:01 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleDateString()); // 9/24/2025
// console.log(myDate.toJSON()); // 2025-09-24T07:29:01.978Z
// console.log(myDate.toDateString()); // Wed Sep 24 2025
// console.log(myDate.toISOString()); // 2025-09-24T07:29:01.978Z
// console.log(myDate.toTimeString()); // 07:29:01 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); // Wed, 24 Sep 2025 07:29:01 GMT
// console.log(myDate.getTimezoneOffset()); // 0
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2025, 0, 24) 
// console.log(myCreatedDate.toDateString());  // Fri Jan 24 2025

// let myCreatedDate = new Date(2025, 0, 24, 5, 40)
// console.log(myCreatedDate.toLocaleString()); // 1/24/2025, 5:40:00 AM

// let myCreatedDate = new Date("2025-07-14")
// console.log(myCreatedDate.toLocaleString()); // 7/14/2025, 12:00:00 AM

let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString()); // 1/14/2025, 12:00:00 AM

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1758704306654
// console.log(myCreatedDate.getTime()); // 1736812800000
// console.log(Math.floor(Date.now()/1000)); // 1758704499

let newDate = new Date()
// console.log(newDate); // 2025-09-24T09:03:09.012Z
// console.log(newDate.getMonth()); // 8
console.log(newDate.getDay()); // 3
// console.log(newDate.getDate()); // 24
// console.log(newDate.getMonth() + 1); // 9

// `${newDate.getMonth() +1 } and the time `

// newDate.toLocaleString('default',{
//     weekday: "long",
//     // timeZone: ''
// })