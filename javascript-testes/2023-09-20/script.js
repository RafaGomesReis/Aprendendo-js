let idade = 17

function maiorDeIdade(idade) {
    if(idade>= 18 ){
        return 'É maior de idade';
    }
    else {
        return 'É menor de idade';
    }
}
let verificação = maiorDeIdade(idade);
console.log(verificação)
// if (verificação) {
//      console.log('É maior de idade');
// } else {
//     console.log('É menor de idade');
// }
function calculoPct(x, y) {
        return (y/x) * 100;

}
let x = 40
let y = 10
let porcentagem = calculoPct(x, y)
console.log(porcentagem)
console.log(`${porcentagem}% de ${x} é ${y}`)
