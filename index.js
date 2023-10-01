//asynchronous
console.log("Hello, World1");
console.log("Hello, World2");
setTimeout(()=>{
    calcu();
},5000)
console.log("Hello, World3");
console.log("Hello, World4");
console.log("Hello, World5");

function calcu() {
    let sum = 0;
    for (let i = 0; i <= 1110000000; i++) { 
        sum += i;
    }
    console.log(sum);
}

//synchronous
console.log("Hello, World1");
console.log("Hello, World2");
calcu();
console.log("Hello, World3");
console.log("Hello, World4");
console.log("Hello, World5");

function calcu() {
    let sum = 0;
    for (let i = 0; i <= 1110000000; i++) { 
        sum += i;
    }
    console.log(sum);
}


//output:-
//Hello, World1
// Hello, World2
// Hello, World3
// Hello, World4
// Hello, World5
// Hello, World1
// Hello, World2
// 616050000067109100
// Hello, World3
// Hello, World4
// Hello, World5
// 616050000067109100
