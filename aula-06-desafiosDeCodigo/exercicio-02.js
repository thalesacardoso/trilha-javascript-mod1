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
let maiorPar = 0;
let menorImpar = 0;

// Laço de repetição para testar os valores dos números
for (let i = 0; i < numeros.length; i++) {

    // faz o teste se o número é impar ou par
    if (numeros[i] % 2 === 0) {
        // compara se o número recebido é o maior número par
        if (numeros[i] > maiorPar) {
            maiorPar = numeros[i];
        }
    
    } else {
        // Se o menor número impar é igual a 0 então ele recebe um valor novo
        if (menorImpar === 0) {
            menorImpar = numeros[i];

        // se o valor do menorImpar for maior que o novo número então ele recebe o novo valor. 
        } else if (menorImpar > numeros[i]) {
            menorImpar = numeros[i]
        }
    }
}

// mensagem
print('O maior número par é: ' + maiorPar);
print('O menor número impar é: ' + menorImpar);

