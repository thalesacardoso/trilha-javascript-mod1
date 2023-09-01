/*
Trabalhando com Importação e Exportação
Regra: 

*/

let media = 8;

function gets() {
    return media;
}

function print(texto) {
    console.log(texto)
}

// Responsável por exportar os métodos gets e print
module.exports = { gets, print };