class Carro {
    marca;
    cor;
    autonomia;
    
    constructor(marca, cor, autonomia) {
        this.marca = marca;
        this.cor = cor;
        this.autonomia = autonomia;
    }

    gastoPercurso(distancia, precoCombustivel){
        return (distancia / this.autonomia) * precoCombustivel;
    }

}

const fordKa = new Carro("ford", "vermelho", "8.2");

console.log(fordKa);
console.log("Consumo em trajeto: " + fordKa.gastoPercurso(227, 5.97));