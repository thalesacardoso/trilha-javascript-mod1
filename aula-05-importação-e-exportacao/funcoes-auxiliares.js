/*
Trabalhando com Importação e Exportação
Regra: 

*/

function gets() {
    return 10;
}

function print(texto) {
    console.log(texto)
}

// Responsável por exportar os métodos gets e print
module.exports = { gets, print };