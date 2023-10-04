function step1(value,error){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve( value+10);}else{  
                reject('Error in Step-1');}
    });
};
function step2(value,error){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve( value+10);}else{  
                reject('Error in Step-2');}
    });
};

function step3(value,error){
    return new Promise((resolve,reject)=>{
        if(!error){
            resolve( value+10);}else{  
                reject('Error in Step-3');}
    });
};


async function res(){
    let res1 = await step1(10,false)
    console.log(res1);
}
res();
async function res2(){
    let r2 = await  Promise.resolve(404)
    return r2
}
res2().then((result)=>console.log(result))