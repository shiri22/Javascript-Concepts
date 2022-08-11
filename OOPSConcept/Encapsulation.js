class Person{
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary
    }
    getName(){
        console.log(this.name);
    }
    getAge(){
        console.log(this.age);
    }
    getSalary(){
        console.log(this.salary)
    }
}
const Persons= new Person('SHIRI',25,30000);
Persons.getName();
Persons.getAge();
Persons.getSalary();