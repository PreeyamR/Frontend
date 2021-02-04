//concat
let arr1 = [1,2,3];
let arr2 = [4,5];
//arr1 = arr1.concat(arr2);
arr1 = [...arr1,...arr2];
console.log("Array 1 == "+arr1);

//copy - changes will reflect in the copy
let arr3 = arr2;
console.log("Array 3 == "+arr3);

arr3.push(6);
console.log("Array 2 == "+arr2);
console.log("Array 3 == "+arr3);

//copy using spread
let arr4 = ['a','b','c'];
let arr5 = [...arr4];
console.log("Array 4 == "+arr4);
arr5.push('d');
console.log("Array 4 == "+arr4);
console.log("Array 5 == "+arr5);


//expand array
let arr6 = [arr4, 'd','e'];
console.log("Array 6 length == "+arr6.length);

//expand array using spread
let arr7 = [...arr4, 'd','e'];
console.log("Array 7 length == "+arr7.length);
