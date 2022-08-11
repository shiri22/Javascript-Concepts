//reeplaceAll
const data="jxvxscript";
console.log(data.replace(/x/g,'a'))
// console.log(data.replaceAll('x', "a"));

//Numeric Separator

const data1=1_00_000;
console.log(data1);

//Logical Assignment Operator
let arr1=10;
let arr2=20;
//arr2&&=arr1
// arr2= arr2 && arr1; // &&= means arr2=arr2 && arr1 (&&) is  will check left hand side expresion if it is true means some value except null if it null it returns null otherwise  it returns right hand side value
// console.log(arr2)

arr2 = arr2 || arr1; // ||= checks first one if it is true it will return first one value otherwise checks second one
console.log(arr2)