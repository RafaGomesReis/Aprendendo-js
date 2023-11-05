//https://jsonplaceholder.typicode.com/posts

function clicou() {
    let requisiçao = fetch('https://jsonplaceholder.typicode.com/posts/1/comments')

    requisiçao.then((response) => {
        return response.json();
    })
        .then((json) => {
            alert(`Titulo do primeiro post ${json[0].title}`)
        })

    alert("opa, clicou")
}

function somar(x, y) {
    return x + y;
}
x = 10
y = 30
console.log(somar(x, y));


document.querySelector('#botao').addEventListener('click', clicou)
