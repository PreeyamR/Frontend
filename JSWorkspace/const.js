//Example 1: const variable cannot be reassigned
/**
const x = 12; 
x = 13; 
x += 1; */

//Example 2: Block Scope
const x = 10; 
{ 
    const x = 20; 
    console.log(x); 

    { 
        const x = 30; 
        console.log(x); 
    } 
    { 
        const x = 40; 
        console.log(x); 
    } 
} 
console.log(x); 

//Example 3: can't assigned after declaration
/**
const y;
y = 10;
*/

//Example 4: can't be hoisted
/**
z = 3; 
console.log(z); 
const z;
*/

//Example 5: array values can be modified, reference to array cannot be changed
const arr1 = ["a", "b", "c", "d"]; 
console.log(arr1.toString()); 
arr1[2] = "bee"; 
console.log(arr1.toString()); 

//Example 6: object properties can be modified, reference to object cannot be changed
const person = { 
    firstName: "Kuldeep", 
    lastName: "Singh", 
    age: 20, 
    about: "MCA"
}; 
console.log(person);

person.firstName = "Pradeep"; 
person.lastName = "Singh"; 
person.age = 21; 
person.about = "Engineer"; 

console.log(person);

