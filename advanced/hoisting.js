console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// The above code is interpreted by JavaScript as follows:

var x; // Declaration is hoisted to the top
console.log(x); // Output: undefined
x = 5; // Initialization

// Functions are also hoisted:

foo(); // Output: "Hello, I am foo!"
function foo() {
    console.log("Hello, I am foo!");
}

// The above code is interpreted by JavaScript as:

function foo() {
    console.log("Hello, I am foo!");
}
foo(); // Output: "Hello, I am foo!"
