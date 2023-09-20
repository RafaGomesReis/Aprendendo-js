let isMember = true;
let shipping = isMember ? 2 : 10;

console.log(isMember ? 'Você é membro' :
'Você não é membro');
console.log("Frete:" + shipping);


let profession = "Bombeiro";

console.log("Profissão:" + profession);

switch (profession) {

case 'fiscal':

    console.log('Sua camisa é Verde');
break;
case 'bombeiro':

    console.log('Sua camisa é vermelha');
break;

case 'policial':
    console.log('Sua camisa é preta');
break;

default:
    console.log('Sua camisa é banca');
    break;
}



function gravidade() {
    console.log('A gravidade do planeta é :')
    console.log(9.8);

}

gravidade();