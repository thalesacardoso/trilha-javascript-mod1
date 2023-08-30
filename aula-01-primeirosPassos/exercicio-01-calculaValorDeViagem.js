/*
Faça um programa para calcular o valor de uma viagem.

você terá 3 variáveis. sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

// variáveis
let precoCombustivel = 5.00;
let consumoPorLitro = 12;
let distancia = 100;

// cálculo do valor gasto
let valorGasto = (distancia / consumoPorLitro) * precoCombustivel;

// mensagem
console.log("O gasto total dessa viagem é de R$ " + valorGasto.toFixed(2))