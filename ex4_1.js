'use strict'
class Person {
    constructor (name){
        this.name = name;
    }
    printGreeting (){
        console.log(`hi,I am ${this.name}!`);
    }
}

var person1 = new Person('Peter');
person1.printGreeting();

class Employee extends Person {
    constructor (name,job){
        super(name);
        this.job = job
    }
    printGreeting (){
        super.printGreeting();
        console.log(`hi,I am ${this.name} and I am a ${this.job}!`);
    }
}

var person1 = new Employee('Peter','Teacher');
person1.printGreeting();