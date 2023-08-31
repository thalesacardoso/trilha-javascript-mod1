// Cria a classe Carro
class Carro {

    constructor(marca, cor, KMPorLitro) {
        this.marca = marca;
        this.cor = cor;
        this.KMPorLitro = KMPorLitro;
    }

    // Calcula o valor total da viagem
    calcularGastoDePercurso(distanciaEmKM, precoCombustivel) {
        this.gasto = (distanciaEmKM / this.KMPorLitro) * precoCombustivel;
        console.log(`O carro vai gastar R$ ${this.gasto.toFixed(2)} para chegar no destino`);
    }
}

// Cria o Objeto chamado palio
let palio = new Carro('Fiat', 'Cinza', 15);
palio.calcularGastoDePercurso(100, 5);

// Cria o Objeto chamado hb20
let hb20 = new Carro('Hyundai', 'Prata', 12);
hb20.calcularGastoDePercurso(200, 3.5);
