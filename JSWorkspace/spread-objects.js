//clone objects
const personName = {
    firstName : 'John',
    lastName  : 'Smith'
}
const cloneDetails = {...personName};
console.log("Cloned User Details == "+cloneDetails.firstName);

//merge objects 

const person1 = {
    name : 'John',
    age : 21
}
const person2 = {
    name : 'Angela',
    location : 'Tokyo'
}
const mergedPersonDetails = {...person1, ...person2};
console.log("Merged Person Name == "+mergedPersonDetails.name);