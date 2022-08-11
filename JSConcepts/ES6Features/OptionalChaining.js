// let animal={
//     cat:{
//         name:"oppo"
//     }
// }
// console.log(animal.dog?.age) //afer ES6
// console.log(animal.dog && animal.dog.name) //Before ES6 

let user={
    admin(){
        console.log("iam an admin")
    }
}
user.admin?.(); //ES6
user.add && user.add(); //Before ES6