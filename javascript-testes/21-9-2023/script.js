



function calcularImovel(metragem, quartos) {
    resultado = 0
    if (quartos == 1) {
        resultado = metragem * 3000
    } else if (quartos == 2){
        resultado = metragem *3000 * 1.2
    } else if (quartos == 3){
        resultado = metragem * 3000 * 1.5
    }

    // quarto = 1 -> 1.1
    // quarto = 2 -> 1.2
    // quarto = 3 -> 1.3




    // resultado = 3000 * (10 + quartos)/10
    return resultado
    // return 3000 * (10 + quartos) / 10
};


let m2 = 3000;
let metragem = 123;
let quartos = 3;
let preço = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preço}`)