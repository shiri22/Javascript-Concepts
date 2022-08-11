//padStart
//padEnd

//padStart
// const data="hello";
// console.log(data.padStart(6,'*'));
// console.log(data.padEnd(6, "*"));

const data1='6601'
console.log(data1.padStart(5, "*"));

//Object.entries:its stores the object into array of array's each key value pair its stores as one single array
const data={
    name:"shriri",
    age:25,
    mail:"shiri@gmail.com"
}
console.log(Object.entries(data));

//Object.values its used to get the values only from object in the form of array
console.log(Object.values(data));

//Object.keys its used to get the keys only from object in the form of array
console.log(Object.keys(data));


