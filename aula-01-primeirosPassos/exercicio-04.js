/*
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
uma indicação sobre a condicão de peso de uma pessoa. 

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5 abaixo do peso
- Entre 18.5 e 25 peso normal
- Entre 25 e 30 acima do peso
- Entre 30 e 40 Obeso
- Acima de 40 obesidade Grave

*/

// variáveis
let pesoKG = 200;
let altura = 1.80;
let imc;

// calcula o IMC
imc = pesoKG / (altura * altura)


// mostra uma mensagem de acordo com o IMC
if (imc < 18.5) {
    console.log('Abaixo do Peso');

} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal');

} else if (imc >= 25 && imc <= 30) {
    console.log('Acima do peso');

} else if (imc >= 30 && imc <= 40) {
    console.log('Obeso');

} else {
    console.log('Obesidade Grave');
} 