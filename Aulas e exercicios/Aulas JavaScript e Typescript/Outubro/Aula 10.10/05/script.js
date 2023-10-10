// Classe base (superclasse) Animal
function Animal(nome) {
    this.nome = nome;
}

Animal.prototype.fazerBarulho = function () {
    console.log(`${this.nome} faz um barulho.`);
};

// Subclasse Cachorro que herda de Animal
function Cachorro(nome, raca) {
    Animal.call(this, nome); // Chama o construtor de Animal com o nome do Cachorro
    this.raca = raca;
}

// Estabelece a herança de Cachorro a partir de Animal
Cachorro.prototype = Object.create(Animal.prototype);

// Adiciona um método específico de Cachorro
Cachorro.prototype.latir = function () {
    console.log(`${this.nome} (${this.raca}) late: Woof! Woof!`);
};

// Cria um objeto Cachorro
const meuCachorro = new Cachorro('Rex', 'Labrador');
meuCachorro.fazerBarulho(); // Herdado de Animal
meuCachorro.latir(); // Método específico de Cachorro