class Person {
    constructor(firstName, lastName, age, salary){
        this.fn = firstName;
        this.ln = lastName;
        this.age = age;
        this.sal = salary;
    }

    incSalary(){
        this.sal += 10000;
    }
}
const personOne = new Person("Kuldeep", "Singh", 31, 50000);
personOne.incSalary();
console.log(personOne.sal);