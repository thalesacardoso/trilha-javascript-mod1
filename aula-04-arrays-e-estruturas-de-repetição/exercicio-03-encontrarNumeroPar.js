// Exercício para mostrar os números pares dentro de um array.

// Cria um array de números
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Varre o array e mostra os que são pares
for (let i = 0; i <= numeros.length; i++) {
    let num = numeros[i] 

    if ( num % 2 === 0) {
        console.log(`${numeros[i]} é par`)
    };
};
