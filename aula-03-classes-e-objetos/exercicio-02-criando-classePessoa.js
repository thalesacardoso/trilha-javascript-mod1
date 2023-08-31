// Cria a classe Pessoa
class Pessoa {
    constructor(nome, pesoKG, altura) {
        this.nome = nome;
        this.peso = pesoKG;
        this.altura = altura;
    }

    // Calcula o IMC da pessoa
    calcularIMC() {
        this.imc = this.peso / (this.altura * this.altura);
        console.log(this.imc.toFixed(2));
    }

    // Mostra a tabela de classificação de acordo com o IMC da pessoa
    classificarIMC() {
        if (this.imc < 18.5) {
            console.log('Abaixo do Peso');

        } else if (this.imc >= 18.5 && this.imc <= 25) {
            console.log('Peso normal');

        } else if (this.imc >= 25 && this.imc <= 30) {
            console.log('Acima do peso');

        } else if (this.imc >= 30 && this.imc <= 40) {
            console.log('Obeso');

        } else {
            console.log('Obesidade Grave');
        }
    }
}

// Instanciando Objeto joao
let joao = new Pessoa('João', 90, 1.80);
joao.calcularIMC();
joao.classificarIMC();

// Instanciando Objeto mario
let mario = new Pessoa('Mario', 100, 1.50);
mario.calcularIMC();
mario.classificarIMC();