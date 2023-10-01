let p1  = Promise.resolve("Hello,World!");
//promise initialzation without anything
let p2  = 404
//promise initialization using new
let p3  = new Promise((resolve,reject)=>{
    //adding timeout function
    setTimeout(resolve,1000,'Hello World Sucess!')
}
);
let p4  = Promise.reject('rejected Promise!!');
//Gives all 
Promise.all([p1,p2,p3]).then((val)=> console.log(val));
//status of promises
Promise.allSettled([p1,p2,p3]).then((val)=> console.log(val));
//gives which executes first
Promise.race([p1,p2,p3]).then((val)=> console.log(val));
//returns anything which is resolved
Promise.any([p1,p4]).then((val)=> console.log(val));