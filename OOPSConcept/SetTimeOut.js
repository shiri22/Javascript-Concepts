// setTimeout(()=>console.log("msg1"),2000)
// setTimeout(() => console.log("msg2"), 3000);
// setTimeout(() => console.log("msg3"), 1000);


for( var i=0;i<5;i++){
  let j=i;
    setTimeout(() => {
        console.log(j)   //0 1 2 3 4 
    }, 1000*j);
}

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {            // 5 5 5 5 5
//     console.log(i);
//   }, 1000);
// }