// let name = 'Rafael'
// let names = ['rafael', 'gusta'];

// let person = {
//     name:'Rafael',
//     age: 3232,
//     country: 'United States',
//     eyes: ['black', 'white'],
//     characteristcs: {
//         power: 20,
//         magic: 5,
//         stamina: 20,
//         speed: 50
//     }
// }
// console.log(person)

// let people ={
//     name: 'Rafael',
//     sla: 'trinta',
//     tum:'praum',
//     completeName: function() {
//         return this.sla + ' ' + this.tum;
//     }
// }
// console.log(people.completeName())

// let colors = [
//     { name: 'white', qt:20},
//     { name: 'red', qt:30},
//     { name: 'green', qt:40}
// ];

// // for (var i = 0; i <colors.length; i++) {
// //     console.log(colors[i]);
// // }

// for(let i in colors) {
//     // console.log(colors[i].name);
//     colors[i].name = colors[i].name.toUpperCase();
// }
// console.log(colors);

// let number = 0;

// // while (number < 10) {
// //   console.log(`O numero da vez é ${number}`);
// //   number += 1;
// // }

// let fruits = ["Maçã", "Uvas", "Pera"];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// while (number <101){
//     console.log(number);
//     number++;
// }


// let cars = [
//   {
//     brand: 'pa', year: 2023
//   },
//   {
//     brand: 'pe', year: 2013
//   },
//   {
//     brand: 'pi',year: 2043
//   }
// ]
// cars.sort((a, b ) => {
//   if (a.year > b.year){
//     return 1 ;
// } 
//   else if (a.year < b.year) {
//     return -1 ;
// }
//   else {
//     return 0;
//   }
// });
// console.log(cars);

let fruits = ["Maçã", "Uvas", "Pera", 'banana'];

let bigFruits = fruits.filter((item) => {
  return item.length > 4;
});
console.log(bigFruits);

let ok = fruits.every((value) => {
  return value.length > 3;
});
if (ok) {
  console.log('TOdos maior que 3');
} else {
  console.log('Nem todos maiores que 3');
}


let pa = fruits.some((value) => {
  return value.length > 3;
});
if (pa) {
  console.log('Algum maior que 3');
} else {
  console.log('Nenhum maior que 3');
}