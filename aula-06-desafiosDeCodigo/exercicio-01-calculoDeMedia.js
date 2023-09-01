/*

1) faça um programa que receba a média de um aluno.
Caso a média seja < que 5 imprima "Reprovado"
Caso a média seja >= 5 e < 7 imprima "Recuperação
Caso a média seja >= 7 imprima "Aprovado"

    Exemplo:
        Entrada: 5.5
        Saida: Recuperação

*/

// importa as funções Gets e print
const { gets, print } = require('./funcoes-auxiliares1');

// armazena os valor vindos da função gets()
let media = gets();

// compara os valores importados vindo de Gets e compara coma as regras determinadas.
if (media > 0 && media < 5) {
    print('reprovado');

} else if (media >= 5 && media < 7) {
    print('Recuperação');

} else if (media >= 7) {
    print('Aprovado');

} else {
    print('Nota inválida');
}