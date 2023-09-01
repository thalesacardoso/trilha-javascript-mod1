// Valores atribuidos
let valor = [1100, 50]
let i = 0;

function gets() {
    let valores =  valor[i]
    i++
    return valores
}

function print(texto) {
    console.log(texto)
}

// Responsável por exportar os métodos gets e print
module.exports = { gets, print };