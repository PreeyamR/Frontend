let counter = function() {
    let privateCounter = 0;
    function changeValue(value){
        privateCounter += value;
    }
    return {
        increment: function(){changeValue(1);},
        decrement: function(){changeValue(-1);},
        display: function() {return privateCounter}
    };
};

let counter1 = counter();
let counter2 = counter();

//console.log(counter1.display());

counter1.increment();
counter1.increment();
//console.log(counter1.display());

counter1.decrement();
console.log("Counter 1 == "+counter1.display());
console.log("Counter 2 == "+counter2.display());