let p1  = Promise.resolve("Hello,World!")
let p2  = 404
let p3  = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'Hello World Sucess!')
}
);

Promise.all([p1,p2,p3]).then((val)=> console.log(val));