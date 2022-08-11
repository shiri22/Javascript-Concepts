//  ES6 JS classes
class Human{
    constructor(){
        this.age=25;
    }
    printAge(){
        console.log(this.age);
    }
}
class Person extends Human{
    constructor(){
        super();
        this.name="shirisha";
        this.age=50;
    }
    printName(){
        console.log(this.name);
    }
}
const Personss= new Person();
Persons.printName();
Persons.printAge();

// ES7 JS Classes

class Human {
    age = 25;
  printAge = () => console.log(this.age);
}
class Person extends Human {
    name = "shirisha";
    age = 50;
  printName = () => console.log(this.name);
}
const Persons = new Person();
Persons.printName();
Persons.printAge();
