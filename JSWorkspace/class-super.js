class A {
    doPrint() {
        console.log("Parent class");
    }
}
class B extends A {
    doPrint() {
        super.doPrint();
        console.log("Child class");
    }
}
var obj = new B();
obj.doPrint();
