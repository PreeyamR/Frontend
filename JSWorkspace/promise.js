const promise = new Promise((resolve, reject) => {
    if(Math.random() > 0){
        resolve("+ve number");
    }
    reject(new Error("-ve number"));
}) 

promise.then((value) => { 
    console.log(value); 
}).catch(err => console.log(err));