// function createPerson(name, lastName, age) {
//     return {
//         name,
//         lastName,
//         age,
//         getFullName:()
//     }
// }

// let person1 = createPerson('Rach', 'John', 90)
// let person2 = createPerson('eu', 'tu', 68)

// console.log(person2.age);

let person = {
    name: 'John',
    lastname: 'John',
    age: 90,
    getFullName() {
        return `${this.name} ${this.lastname}`;
    }
}

console.log(person.getFullName());