class Parent{
    getMobile(){
        console.log('Iphome 11')
    }
}
class Child extends Parent{
    getMobile(){
        console.log("Iphone 12");
    }
}
const obj= new Child();
obj.getMobile();