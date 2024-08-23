
const ps = require("prompt-sync");
const prompt = ps();

let preco = prompt("Digite o valor do produto: ");
let FormaPagamento = prompt("Digite a forma de pagamento: ");

if (FormaPagamento === "debito") {
    let ValorFinal = (preco * 0.9)
    console.log("Valor final a ser pago: R$", ValorFinal);
} else if (FormaPagamento === "credito") {
    let parcelas = prompt("Quer dividir em quantas parcelas? ");
    parcelas = Number(parcelas);
    let parcelamento = preco / parcelas
    if (parcelas === 2) {
        console.log("Valor final a ser pago: 2x de R$", parcelamento.toFixed(2));
    } else if (parcelas >= 3) {
        console.log("Valor final a ser pago: ", parcelas, "vezes de: R$", (parcelamento * 1.1).toFixed(2));
    }
} else if ((FormaPagamento === "dinheiro") || (FormaPagamento = "pix")) {
    console.log("Valor final a ser pago: R$", (preco * 0.85).toFixed(2));
}