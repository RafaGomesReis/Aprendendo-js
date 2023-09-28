
function clicou() {



    // // console.log(teste.children[0].children);
    // // // ul.innerHTML = "<li>Parapapapapaaa</li>";
    // // const asd = document.querySelector('#asd');
    // // asd.innerHTML = "Rafael";

    // // // ul.children[0].innerHTML = "Olha a <strong>Explosão</strong>";

    // // // ul.innerHTML += "<li>Item adicionado</li>";

    // // let newLi = document.createElement("li");
    // // newLi.innerText = "Item adicionado";
    // // ul.appendChild(newLi);


    // // let botao = document.querySelector(".botao");
    // // botao.addEventListener("click", clicou);
    // const teste = document.querySelector('#teste');
    // const ul = teste.querySelector('ul');

    // // const newButton = document.createElement('button')
    // // newButton.innerHTML = "Botão";
    // let newUl = document.createElement('ul');
    // for (let i = 0; i < 5; i++) {
    //     let newLi = document.createElement('li');
    //     newLi.innerHTML = "Item add" + i;
    //     newUl.append(newLi);
    // }
    // ul.after(newUl);
    // // ul.before("newButton");



    // console.log(input.getAttribute('placeholder'))

    // if (input.hasAttribute('placeholder')) {
    //     console.log("Tem placeholder");
    // } else {
    //     "não tem placeholder";
    // }

    const input = document.querySelector('input');
    const botao = document.querySelector('.botao');

    console.log(botao);

    if (input.getAttribute('type') == 'text') {
        input.setAttribute('type', 'password');
        botao.innerText = ('value', 'Mostar Password');
    } else {
        input.setAttribute('type', 'text');
        botao.innerText = ('value', 'Ocultar Password');

    }





}