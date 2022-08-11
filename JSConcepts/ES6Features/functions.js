
    //  ES5 FUNCTION
function oldVersion(num1){
    return num1+50;
}
console.log(oldVersion(50));

//  ES6 Function(Arrow Function) if parameters more than one then only we can use braces()

const newVersion = num1 => num1+60;
console.log(newVersion(50));

const sum = (num1,num2) => num1+num2;
console.log(sum(5,10));
