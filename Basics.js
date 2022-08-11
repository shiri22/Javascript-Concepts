// variable declaration
var name="shiri";
console.log(name); 

//Data Types
//1.number,2.string,3.boolean,4.undefined

//Number
var data=1;
console.log(typeof data);

// //Number
var data = 1.88;
console.log(typeof data);

// //String
var data="shiri"
console.log(typeof data);

// //String
var data = 'shiri';
console.log(typeof data);

// //Boolean
var data=true;
console.log(typeof data);

// //Boolean
var data = false;
console.log(typeof data);

//Undefined
var data;
console.log(typeof data);

//Undefined
var data=undefined;
console.log(typeof data);

//Arrays and Objects
//Arrays are used to store multiple type of data
var data=[1,2,3,4,"shiri",undefined];
console.log(data);

//Objects
var data={
    name:"shiri",
    age:24
}
console.log(data.name);

//Functions

function user(){
    console.log("hello")
}
user();

//Function
function sub(n1,n2){
    return n1+n2;
}
var sum= sub(10,20);
console.log(sum);

//Conditional Statements
//if if-else if-else if-else

//if
var data=75;
if(data>90){
    console.log('Grade A');
}
//if-else
var data = 80;
if (data > 90) {
  console.log("Grade A");
} else {
  console.log("Grade B");
}
// //if-else if-else
var data = 75;
if (data > 90) {
  console.log("Grade A");
} else if (data > 80) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

//Loops
//for while
//for loop
var output=0;
for(var i=0;i<=5;i++){
    output=output+i;
}
console.log(output)

//while loop
var i=0;
while(i<=10){
    console.log(i);
    i++;

}