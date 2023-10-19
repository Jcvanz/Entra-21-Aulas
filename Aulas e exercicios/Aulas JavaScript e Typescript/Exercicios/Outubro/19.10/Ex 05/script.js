class PessoaFisica {
    constructor(documento, nome, email) {
        this.documento = documento,
        this.nome = nome,
        this.email = email
    }

    listarDados() {
        console.log(`Documento: ${this.documento}`);
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
    }
}

const pessoa = new PessoaFisica('014.632.587-02', 'Julio', 'j.vanz@gmail.com');
pessoa.listarDados();