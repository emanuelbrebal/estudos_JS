const ps = require("prompt-sync");
const prompt = ps();

const numero = prompt("Digite um número para saber a sua tabuada: ");
for (let i = 1; i <= 10; i++) {
    let tabuada = numero * i;
    console.log(numero, "*", i, "=", tabuada);
}
