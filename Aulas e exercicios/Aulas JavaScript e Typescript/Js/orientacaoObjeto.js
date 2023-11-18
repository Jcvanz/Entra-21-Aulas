/* 
    Métodos:

    - Podem ser adds aos objetos;
    - São como propriedades, mas contém uma função;
    - Invocamos os métodos da mesma maneira que funções

    Ex:

    const animal = {
        nome: 'Bob',
        latir: function() {
            console.log('Au au')
        }
    }

    animal.latir();

    - Os métodos são utilizados para interagir também com as 
    propriedades do seu objeto;
    - Podemos exibir elas ou modificá-las;
    - Podemos nos refernciar com o proprio objeto com a palavra this

    Ex: 

    const pessoa = {
        nome: 'Julio',
        getNome: function() {
            return this.nome;
        },

        setNome: function(novoNome) {
            this.nome = novoNome;
        },
    }

    console.log(pessoa.getNome());
    pessoa.setNome('Joaquim');
*/