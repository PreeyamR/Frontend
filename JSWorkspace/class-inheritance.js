class A {
    constructor(a) {
        this.variable = a
    }
} 
class B extends A {
    display() {
        console.log("variable == "+this.variable)
    }
}
var classObj = new B(10);
classObj.display();
