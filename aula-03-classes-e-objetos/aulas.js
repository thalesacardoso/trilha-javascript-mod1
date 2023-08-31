/*
Trabalhando com Classes e Objetos
Regra: Todo nome de classe tem que começar com a letra maiúscula.
    class Aluno , 
    class Carro , 
    class Produto.
*/

// Cria uma classe Pessoa
class Pessoa {

    // Método construtor
    constructor(nome, idade) {

        // Atributos da classe
        this.nome = nome;
        this.idade = idade;
    }

    // Método falar
    falar() {
        return `${this.nome} tem ${this.idade} anos`;
    }
}

//   Cria / Instancia um Objeto chamado p1 se referindo a classe Pessoa.
let p1 = new Pessoa('Marcos', 30);

// Mostra o que tem dentro do Objeto criado
console.log(p1);

// Chama o método falar()
console.log(p1.falar());

// Mostra os dados de dentro do atributo nome.
console.log(p1.nome);
