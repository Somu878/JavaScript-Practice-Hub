// //this keyword refers to an object
// let person = {
//     this:firstname = 'somu',
//     lastname:'kandula',
//     getname: function(){
//         console.log(firstname);
//         console.log(this.lastname);
//     }
// }
// person.getname();
// //somu
// //kandula
// let res= person.getname;
// res(); //it return undefined because it refers to a global object

// //it returns window objects
// console.log(this);

//call and apply
function greet(name) {
    console.log(`Hello, ${name}!`);
}

// greet.apply(null, ["Alice"]); // Output: Hello, Alice!
// greet.call(null, "Bob"); // Output: Hello, Bob!

//bind 
let hello = greet.bind(null,["jason",'david']);
hello();

