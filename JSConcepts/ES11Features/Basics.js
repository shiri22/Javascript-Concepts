//BigInt
console.log(Number.MAX_SAFE_INTEGER); //means 2^53-1

//Dynamic Import

// import(module.js).then((module)=>
// {

// })
// //or

// async()=>{
//     const module = await import(module.js)
// }

//nullish operator is denoted with ??(double question mark) used to show something instead of null

const data=null;
console.log(data ?? "hello"); //op:-hello

const dataa="hi";
console.log(dataa ?? "hello"); //op:-hi

//Optional Chaining it is safe way to handle nested object properties from errors even though they dont exist

const user={
    cat:{
        name:"oppo"
    }
}
console.log(user.dog && user.dog.name) //before ES11
console.log(user.dog?.name) //After ES11

const users={
    admin(){
        console.log("hello world")
    }
}
users.admin?.()