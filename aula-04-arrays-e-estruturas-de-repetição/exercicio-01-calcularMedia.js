
let notas = [20, 21, 32, 12,];
let soma = 0;
let media = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
    media = soma / notas.length;
};

console.log(`A média final é ${media}`);