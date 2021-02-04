// Without rest parameter 
function funA(a, b){ 
	return a + b; 
} 
console.log(funA(1, 2)); 
console.log(funA(1, 2, 3, 4, 5)); 


// With rest parameter
function funB(...input){ 
    let sum = 0; 
    for(let i of input){ 
        sum+=i; 
    } 
    return sum; 
} 
console.log(funB(1,2)); 
console.log(funB(1,2,3)); 
console.log(funB(1,2,3,4,5));      


function funC(a,b,...c){ 
    console.log(`${a} ${b}`);  
    console.log(c);  
    console.log(c[0]); 
    console.log(c.length); 
} 
funC('Kuldeep','Singh','30','Delhi','India'); 