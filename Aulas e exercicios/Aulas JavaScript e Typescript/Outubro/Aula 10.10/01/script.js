class Cliente {
    constructor(nomeCliente, emailCliente, foneCliente) {
        this.nomeCliente = nomeCliente; 
        this.emailCliente = emailCliente;
        this.foneCliente = foneCliente;
    }
}

const cliente = new Cliente('Julio', 'jc@gmail.com', '(54) 99932-9745');
console.log(cliente);

//////////////////////////////////////////////////////////////////////////////////////////

class Pessoa {
    constructor(nome) {
        var nomePrivado = nome; // variável privada

        this.getNome = () => {
            return nomePrivado; // método público para aceesar a variável privada
        }
    }
}

var pessoa = new Pessoa('João');
console.log(pessoa.getNome()); // acesso ao método público para obtero retorno 
console.log(pessoa.nomePrivado); // isso irá retornar um undefined 