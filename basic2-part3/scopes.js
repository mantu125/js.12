// let a = 10
// const b = 20
// var c = 30
// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30

let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a); // INNER: 10`
}

// console.log(a); // 300
// console.log(b);
// console.log(c); // 30

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
        console.log(username); // hitesh
    }
    // console.log(website);

    two()
}
// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website); // hitesh youtube
    }
    // console.log(website);    
}
// console.log(username);

// +++++++++++++++++++ intresting ++++++++++++++++++++++

console.log(addone(5)); // 6
function addone(num){
    return num + 1 
}

console.log(addTwo(5)); // error
const addTwo = function(num){
    return num + 2
  }

