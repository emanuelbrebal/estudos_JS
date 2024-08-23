const ps = require("prompt-sync");
const prompt = ps();

let n1 = prompt("Digite a sua primeira nota: ");
let n2 = prompt("Digite a sua segunda nota: ");
let n3 = prompt("Digite a sua terceira nota: ");

n1 = Number(n1);
n2 = Number(n2);
n3 = Number(n3);

const media = (n1 + n2 + n3) / 3

console.log("Sua média é: ", media);

if (media < 5 && media >= 0) {
    console.log("Reprovado.");
} else if (media >= 5 && media <= 7) {
    console.log("Recuperação.");
} else if (media >= 7 && media <= 10) {
    console.log("Aprovado.");
} else {
    console.log("Entrada inválida.")
}