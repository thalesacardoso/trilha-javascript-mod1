// importa as funções Gets e print
const { gets, print } = require('./funcoes-auxiliares2');


/*
2) faça um programa que receba N ( quantidade de numeros ) e seus respectivos valores
Imprima o maior número par e o menor número impar
    Exemplo:
        Entrada:
            5 3 4 1 10 8

        Saída:
            Maior número par: 10
            Menor número impar: 1
*/

// armazena os valores vindos da função gets()
let numeros = gets();

// cria variáveis
let maiorPar = null;
let menorImpar = null;

// Laço de repetição para testar os valores dos números
for (let i = 0; i < numeros.length; i++) {

    // verifica se o número recebido é impar ou par.
    if (numeros[i] % 2 === 0) {
        // compara se o maiorPar é nulo ou menor do que numeros[i]
        if (maiorPar === null || numeros[i] > maiorPar) {
            maiorPar = numeros[i];
        }
    } else {
        // compara se o menorImpar é nulo ou maior do que numeros[i]
        if (menorImpar === null || numeros[i] < menorImpar) {
            menorImpar = numeros[i];
        }
    }
}

// mensagem
print('O maior número par é: ' + maiorPar);
print('O menor número impar é: ' + menorImpar);

