//RegularExpression used to match the given character with exciting one if its matches it will return those matched characters

const data="Hello World 123";
console.log(data.match(/hello/i));

console.log(data.match(/[a-z]/g))
console.log(data.match(/[^0-9 ]/g)); //^ means not operator

//Rest/spread propertis (arguments can be trasferred to a function)
const arr=[1,2,3,4]
console.log(Math.max(...arr)); //Finding max number form an arr