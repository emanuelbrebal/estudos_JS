const ps = require("prompt-sync");

const prompt = ps();

let combustivel = 0;

let tipoCombustivel = prompt("Vai abastercer com gasolina ou etanol? ");

if (tipoCombustivel === "etanol") {
    combustivel = 3.96;
} else if (tipoCombustivel === "gasolina") {
    combustivel = 5.97;
} else {
    console.log("entrada inválida");
}

let dist = prompt("Digite a quilometragem total da viagem: ");

let autonomia = prompt("Digite a autonomia do veículo, em km/L: ");

const resultado = (dist / autonomia) * combustivel;

console.log("O total gasto na viagem é: R$", resultado.toFixed(2)); 