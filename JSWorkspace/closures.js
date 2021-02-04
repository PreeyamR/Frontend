//lexical scoping
function init() {
    var name = 'Adrian'; // name is a local variable created by init
    
    function displayName() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    displayName();
}
init();


//closure
function makeFunc() {
    var name = 'Surbhi';

    function displayName() {
        console.log(name);
    }
    return displayName;
}
  
var myFunc = makeFunc();
myFunc();

//adder function
function adder(x){
    return function(y){
        return x+y;
    }
}
let add5 = adder(5);
let add30 = adder(30);

console.log(add5(5));
console.log(add30(70));
