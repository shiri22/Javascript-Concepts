//Array Features
//isArray(),map(),filter(),some(),every(),forEach(),indexOf(),lastIndexOf()

//Json Features 
//stingify used to convert the normal object to json object

//Data Features
//valueOf() it will print the date in milliseconds

//isArray used to identify whether the given data is array or not
var data=[10,20,30,40,50];
console.log(Array.isArray(data));

// //map() is used to hydrate the array and object values
var data = [10, 20, 30, 40, 50];
var output=data.map(function(element){
    return element+5;
})
console.log(output);

// //filter is used to perfome some operation
var data = [10, 20, 30, 40, 50];
var output = data.filter(function (element) {
  return element>20;
});
console.log(output);

// //some()
var data = [10, 20, 30, 40, 50];
var output = data.some(function (element) {
  return element > 20;
});
console.log(output);

// //every()
var data = [10, 20, 30, 40, 50];
var output = data.every(function (element) {
  return element > 20;
});
console.log(output);

// //forEach
var data = [10, 20, 30, 40, 50];
 data.forEach(function (element) {
  console.log(element);
});

//Map()
var data = [10, 20, 30, 40, 50];
data.map(function (element) {
  console.log(element);
});

//indexOf
var data=[10,20,30];
console.log(data.indexOf(30))

//lastIndexOf
var data = [10, 20, 30,40,30];
console.log(data.lastIndexOf(30));

//Json Features
//stingify
var data={
    name:"shiri",
    age:24
}
console.log(data);
console.log(JSON.stringify(data));
console.log(data.name);

//Date Features
//valueOf()
var data= new Date();
console.log(data.valueOf());