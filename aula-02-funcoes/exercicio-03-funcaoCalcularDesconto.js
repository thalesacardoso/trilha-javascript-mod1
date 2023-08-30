
// função para calcular desconto do produto
function aplicarDesconto(valor, porcentagem) {
    return valor * (1 - (porcentagem / 100));
};

// função para calcular juros do produto
function aplicarJuros(valor, porcentagem) {
    return valor * (1 + (porcentagem / 100));
};


// variáveis
let valorProduto = 100;
let tipoDePagamento = 4;
let valorFinal;

// calcula o valor final e mostra uma mensagem de acordo com o tipo de pagamento
if (tipoDePagamento === 1) {
    valorFinal = aplicarDesconto(valorProduto, 10);
    console.log('O produto que custava R$' + valorProduto.toFixed(2) + ', no débito sai por R$' + valorFinal.toFixed(2));

} else if (tipoDePagamento === 2) {
    valorFinal = aplicarDesconto(valorProduto, 15);
    console.log('O produto que custava R$' + valorProduto.toFixed(2) + ', no Dinheiro ou PIX sai por R$' + valorFinal.toFixed(2));

} else if (tipoDePagamento === 3) {
    valorFinal = aplicarDesconto(valorProduto, 0);
    console.log('O produto que custava R$' + valorProduto.toFixed(2) + ', em até 2x no cartão não possui desconto');

} else {
    valorFinal = aplicarJuros(valorProduto, 10);
    console.log('O produto que custava R$' + valorProduto.toFixed(2) + ', acima de 2x no cartão sai por R$' + valorFinal.toFixed(2) + ' com juros de 10%');
}