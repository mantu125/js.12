// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`); // DB CONNECTED
})();

(() => {
    console.log(`DB CONNECTED TWO`); // DB CONNECTED TWO
})();

((name) => {
    // Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`); // DB CONNECTED TWO world 
})('world')

