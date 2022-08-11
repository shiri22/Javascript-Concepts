//ES6 Classes
class test{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;
    }
    addition(){
        console.log(this.num1+this.num2)
    }
}
let sum = new test(10,20);
sum.addition();