// callbacks function intialization using - CHAINING
step1(10,false)
    .then((result1)=>step2(result1,false))
    .then((result2)=>step3(result2,false))
    .then((result3)=>console.log(result3));

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
