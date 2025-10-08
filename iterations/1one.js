// for

// for (let index = 0; index < 10; index++) {
// for (let index = 0; index <= 10; index++) { // 0 to 10
//     const element = index;
//     console.log(element); // 0 1 2 3 4 5 6 7 8 9
    
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number"); // 5 is best number
    }
    // console.log(element); // 0 to 9 (5 is best number)
}

for (let i = 0; i < 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let A = 0; A < 10; A++) {
        // console.log(`Inner loop value ${A} and inner loop ${i}`);
        // console.log(i + '*' + A + '=' + i*A); // tables 0 to 9
    }
}

let myArray = ["flash", "batman", "superman"]

// console.log(myArray.length); // 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element); // flash batman superman   
}

// break and continue

for (let index = 1; index <= 20; index++) {
    // console.log(`Value of i is ${index}`); // Value of i is 1 to 20   
}

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`); // value 1 to 4 and detected 5
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         continue
//     }
//     console.log(`Value of i is ${index}`); // value 1 to 20 and detected 5
// }

