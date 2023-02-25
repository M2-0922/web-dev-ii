abstract class Person {
    constructor(
        public name: string,
        public age: number
    ){}

    abstract sayHi(): void;

    // sayHi(): void {
    //     console.log(`Hello My name is ${this.name} and I am ${this.age} years old`);
    // }
}

class Student extends Person{
    sayHi(): void {
        console.log(`Hello I am Student`);
    }
}

class Employee extends Person{
    sayHi(): void {
        console.log(`Hello I am Employee`);
    }
}

class Instructor extends Person{
    constructor(
        public name: string,
        public age: number,
        public classCount: number
    ){
        super(name, age);
    }

    sayHi(): void {
        console.log(`Hi, I am ${this.name} and I have ${this.classCount} classes rn`);
    }
}

let p = new Student("Joe", 20);
let p1 = new Employee("Jane", 25);
p.sayHi() // log me: Hello I am Student
p1.sayHi(); // log me: Hello I am Employee
let p2 = new Instructor("Kubilay", 18, 3);
p2.sayHi(); // log me: Hi, I am Kubilay and I have 3 classes rn

export {}