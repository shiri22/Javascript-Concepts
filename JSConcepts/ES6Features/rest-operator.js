const value = (a,...arr) => console.log(...arr);
value(10,20,30,40,50);

const user=(name,...remains)=>console.log(name,remains);
user("shiri",25,'shiri@gmail.com',9877)