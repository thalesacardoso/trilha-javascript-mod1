/*
Faça um programa para calcular o valor de uma viagem.

você terá 5 variáveis. sendo elas:
1 - Preço do etanol
2 - Preço da gasolina
3 - O tipo de combustível que está no seu carro
4 - Gasto médio de combustível do carro por KM
5 - Distância em KM da viagem

Imprima no console o valor que será gasto para realizar esta viagem.
*/

// variáveis
let precoEtanol = 3.50;
let precoGasolina = 5.00;
let consumoPorLitro = 12;
let distanciaEmKM = 100;
let tipoDeCombustivel = 'gasolina';
let valorTotal;

// cálculo da quantidade de litros necessários
let quantidadeDeLitros = distanciaEmKM / consumoPorLitro;

// Estrutura Condicional - Vai calcular o gasto de acordo com o tipo de combustível 
if (tipoDeCombustivel === 'gasolina') {
    // cálculo
    valorTotal = quantidadeDeLitros * precoGasolina;
    // mensagem
    console.log("O gasto total dessa viagem é de R$ " + valorTotal.toFixed(2));
} else {
    // cálculo
    valorTotal = quantidadeDeLitros * precoEtanol;
    // mensagem
    console.log("O gasto total dessa viagem é de R$ " + valorTotal.toFixed(2));
}