//https://jsonplaceholder.typicode.com/posts

async function clicou() {
    let req = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1/comments"
    )
    let json = await req.json();
    
        .then((response) => {
        return response.json();
    })
        .then((json) => {
            alert(`Titulo do primeiro post }`);
        })
        .catch((error) => {
            console.log("Deu problem");
            console.log(error);
        })
        .finally(() => {
            alert("opa,acabou td");
        });
}

// function somar(x, y) {
//     return x + y;
// }
// x = 10
// y = 30
// console.log(somar(x, y));
function inserir() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: "Titulo de teste",
            body: "Corpo de teste",
            userId: 2,
        }),
    })
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
        });
}

document.querySelector("#botao").addEventListener("click", clicou);
document.querySelector("#button").addEventListener("click", inserir);
