function Ninja(nome, qntShuriken) {
    this.nome = nome;
    this.estoqueShuriken = qntShuriken;
    this.atirar = () => {
        if(this.estoqueShuriken > 0) {
            console.log('O ninja atirou');
            this.estoqueShuriken--;
        } else {
            console.log('Estoque de shuriken esgotado');
        }
    }
}

let naruto = new Ninja('naruto', 4);
console.log(naruto);
naruto.atirar();
console.log(naruto);
console.log(`Saldo de shurijen: ${naruto.estoqueShuriken}`);
naruto.atirar();
console.log(`Saldo de shurijen: ${naruto.estoqueShuriken}`);
naruto.atirar();
console.log(`Saldo de shurijen: ${naruto.estoqueShuriken}`);