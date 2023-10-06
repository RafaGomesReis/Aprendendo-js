// class Person {

//     _age = 10;
//     steps = 0;

//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     takeAStep() {
//         this.steps++;
//     }


//     // setAge(newAge) {
//     //     if (typeof newAge == 'number') {
//     //         this.age = newAge;
//     //     } else {
//     //         console.log('Age must be a number');
//     //     }
//     // }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }


//     get age() {
//         return this._age;
//     }

//     set age(x) {
//         if (typeof x == 'number') {
//             this._age = x;
//         } else {
//             console.log('Age must be a number');
//         }
//         this._age = x;
//     }

// }


// let p1 = new Person("Luffy", "D.");
// let p2 = new Person("Merry", "Going");
// let p3 = new Person("Zoro", "Roronoa");

// p1.age = 18;
// // p1.setAge(20);
// // p1.age = 20;

// console.log(` ${p1.fullName} tem ${p1.age} anos`);

// console.log(` ${p2.fullName} tem ${p2.age} anos`);

// console.log(` ${p3.fullName} tem ${p3.age} anos`);

// // p1.takeAStep();
// // p1.takeAStep();

// // console.log(`Passos de ${p1.name}: ${p1.steps}`);
// // console.log(`Passos de ${p2.name}: ${p2.steps}`);
// // console.log(`${p1.name} tem ${p1.age} anos.`);

// class Person {
// age = 0;

// constructor(name) {
// this.name = name;
// }


// sayHi(message) {
// console.log(`${this.name} diz oi`);
// }
// }

// class Student extends Person {


//     constructor(name, id) {
//         super(name);
//         this.id = id;
//     }

//     sayHello() {
//         super.sayHi();
//     }
// }
// let p1 = new Student("Rafael", 2128);

// p1.age = 20;

// // let p2 = new Student("Pedro", 2129);
// p1.sayHi();

// p1.sayHello();

// console.log(`${p1.name} tem ${p1.age} anos e sua matrícula é ${p1.id}`);


class Person {
    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name;
    }


    sayHi() {
        console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands}`);
    }

}

let p1 = new Person("Rafael");

p1.sayHi();