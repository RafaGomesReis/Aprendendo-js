// let nomes: string[] = ["rafa", "jonas", "pedro"];

// let idade: number = 0;
// function firstLetterUpperCase(name: string): number {
//     let firstLetter = name.charAt(0).toUpperCase();
//     return 90;
//     // return firstLetter + name.substring(1);
// }
// let nome: number = firstLetterUpperCase("rafael");

// function somar(n1: number, n2: number): number {
//     return n1 + n2;
// }
// let alguma = somar(10, 15);
// let names = ["rafa", "reis", "jonas"];

// names.forEach(function (nome) {
//     if (typeof nome === "string") {
//         console.log(nome.toUpperCase());
//     } else {
//         console.log(nome);
//     }
// });

// function resumo(usuario: { name: string; idade: number }) {
//     return `olá ${usuario.name}, tudo bem? Você tem ${usuario.idade} anos está bem velho`;
// }
// let u = {
//     name: "Rafael",
//     idade: 90,
// };
// resumo(u);

// let idade: string | number = 90;

// idade = "uau";
// function mostrarIdade(idade) {
//     console.log(idade.toUpperCase());
//     //console.log("minha idade é"+ idade);
// }
// mostrarIdade(90);
// mostrarIdade("90");
// type nomeCompleto = string;
// let nome: string = 'Rafael';

// type User = {
//     nome: string;
//     idade: number;
// };
// interface User {
//     nome: string;
//     idade: number;
// }

// interface User {
//     nome: string;
// }
// interface User {
//     idade: number;
// }

// function resumo(usuario: User) {
//     return `${usuario.nome},${usuario.idade}`;
// }
// resumo({
//     nome: "Rafael",
//     idade: 90,
// });

// let idadeField = document.getElementById("idade") as HTMLInputElement;
// console.log(idadeField.value);

// let nome: 'Rafael' = "Rafael";

// nome = "Rafael";

// function mostrarTexto(
//     texto: string,
//     alinhamento: "top" | "bottom" | "left" | "right"
// ) {
//     return `<div style="text-align: ${alinhamento}">${texto}</div>`;
// }
// mostrarTexto("rafael", "top");
// mostrarTexto("reis", "bottom");
// function fazerRequisicao(url: string, method: "GET" | "POST") {}

// type RequestDetails = { url: string; method: "GET" | "POST" };

// let req: RequestDetails = { url: "https://google.com.br", method: "GET" };
// fazerRequisicao(req.url, req.method);
// type MathFunction = (n1: number, n2: number) => number;

// const somar: MathFunction = (n1, n2) => {
//     return n1 + n2;
// };

// const subtrair: MathFunction = (n1, n2) => {
//     return n1 - n2;
// };
// const multiplicar: MathFunction = (n1, n2) => {
//     return n1 * n2;
// };
// const dividir: MathFunction = (n1, n2) => {
//     return n1 / n2;
// };
