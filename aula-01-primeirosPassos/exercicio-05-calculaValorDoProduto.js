/*
3) elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal 
de etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código de condição de pagamento:
1 - À vista no Débito, recebe 10% de desconto
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto
3 - Em duas vezes, preço normal de etiqueta sem juros
4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%

*/

// variáveis
let valorProduto = 100.50;
let tipoDePagamento = 4;
let valorFinal;

// calcula o valor final e mostra uma mensagem de acordo com o tipo de pagamento
if (tipoDePagamento === 1) {
    valorFinal = valorProduto * 0.9;
    console.log('O produto que custava R$' + valorProduto.toFixed(2) + ', no débito sai por R$' + valorFinal.toFixed(2));

} else if (tipoDePagamento === 2) {
    valorFinal = valorProduto * 0.85;
    console.log('O produto que custava R$' + valorProduto.toFixed(2) + ', no Dinheiro ou PIX sai por R$' + valorFinal.toFixed(2));

} else if (tipoDePagamento === 3) {
    valorFinal = valorProduto * 1;
    console.log('O produto que custava R$' + valorProduto.toFixed(2) + ', em até 2x no cartão não possui desconto');

} else {
    valorFinal = valorProduto * 1.1;
    console.log('O produto que custava R$' + valorProduto.toFixed(2) + ', acima de 2x no cartão sai por R$' + valorFinal.toFixed(2) + ' com juros de 10%');
}