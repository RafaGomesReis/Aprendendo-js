function clicou() {
    const li = document.querySelector('li');

    li.style.backgroundColor = 'blue';
    li.style.fontSize = '20px';



    const button = document.querySelector('button');

    button.style.backgroundColor = 'blue';
    console.log(button.classList);
    if (button.classList.contains('azul')) {
        button.classList.remove('azul');
        button.classList.add('verde');

    } else {
        button.classList.remove('verde');
        button.classList.add('azul');
    }

}
