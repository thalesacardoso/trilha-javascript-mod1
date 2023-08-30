/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule
e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3 ) / 3;

Classificação:
- Média menor que 5, reprovação
- Média entre 5 e 7, recuperação
- Média acima de 7, passou de semestre

*/

// variáveis
let nota1 = 8;
let nota2 = 5;
let nota3 = 1;

// calcula a média das notas
let media = (nota1 + nota2 + nota3) / 3;

// mostra uma mensagem de acordo com a média das notas
if (media < 5) {
    console.log('Aluno reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Aluno em recuperação')
} else {
    console.log('Aluno Aprovado')
}
