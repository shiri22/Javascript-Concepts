//flat means array depth will be become normal array
const arr=[1,2,3,[4,5,6,[7,8,9]]];
console.log(arr.flat(1));  //op:- [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ]
console.log(arr.flat(2)); //op:-[1, 2, 3, 4, 5,6, 7, 8, 9]

//function to string
//function.toString() used to convert the entire function to tostring
function fun(){
    console.log("hello world")
}
console.log(fun.toString());

//trimStart used to remove the space infront of word in the initial only
const user=" hello"
console.log(user)
console.log(user.trimStart());

//trimEnd used to remove the space in the end
const user1 = "hello ";
console.log(user1);
console.log(user.trimStart());

//Object.fromEntries used to convert the array of array elements into object

let datas=[['name',"shiri"],['age',25]]
console.log(Object.fromEntries(datas));