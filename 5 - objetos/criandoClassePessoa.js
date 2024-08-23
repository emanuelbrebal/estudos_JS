class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return (this.peso / (this.altura * this.altura)).toFixed(2)
    }

    classificarIMC() {
        const IMC = this.calcularIMC();
        if (IMC < 18.5) {
            return "Abaixo do peso";
        } else if (IMC >= 18.5 && IMC < 25) {
            return "Peso normal";
        } else if (IMC >= 25 && IMC < 30) {
            return "Sobrepeso";
        } else if (IMC >= 30 && IMC < 40) {
            return "Obesidade";
        } else {
            return "Obesidade mórbida";
        }

    }

}

const jose = new Pessoa("José", 70, 1.75);
const IMC = jose.calcularIMC();
const classIMC = jose.classificarIMC();

console.log(jose)
console.log("IMC de José é: ", IMC, "com a classificação: ", classIMC);