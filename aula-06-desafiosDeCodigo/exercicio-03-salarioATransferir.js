// importa as funções Gets e print
const { gets, print } = require('./funcoes-auxiliares3');


/*
3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios

O salário a ser transferido é calculado da seguinte maneira:

Valor bruto do salário - percentual de imposto mediante a faixa salarial + adicionais dos benefícios.

Para calcular o percentual de imposto segue as aliquotas:

    De R$ 0.00 a R$ 1100.00 = 5.00%
    De R$ 1100.01 a R$ 2500.00 = 10.00%
    Maior que R$ 2500.00 = 15.00%

    Exemplos:
    entrada:
        2000
        250
    Saida:
        2050.00
*/

// declara as variáveis
let salarioBruto = gets();
let beneficios = gets();
let salarioLiquido = 0;

// Calcula o salário liquido de acordo com o salário bruto - imposto + beneficios
if (salarioBruto > 0 && salarioBruto <= 1100) {
    salarioLiquido = (salarioBruto * 0.95) + beneficios

} else if (salarioBruto >= 1100.01 && salarioBruto <= 2500) {
    salarioLiquido = (salarioBruto * 0.90) + beneficios

} else {
    salarioLiquido = (salarioBruto * 0.85) + beneficios
}

// Mensagem
print('Salário líquido R$' + salarioLiquido.toFixed(2))