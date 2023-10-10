class ContaBancaria {
    constructor(saldoInicial) {
        var saldo = saldoInicial;

        function depositar(valor) {
            saldo += valor;
        }

        function sacar(valor) {
            if(saldo >= valor) {
                saldo -= valor;
            } else {
                console.log('Saldo insuficiente');
            }
        }

        this.getSaldo = () => {
            return saldo;
        }

        this.depositar = depositar;
        this.sacar = sacar;
    }
}

var conta = new ContaBancaria(1000);
conta.depositar(500)
console.log(`Deposito 500`); // acesso a um método públco para depositar
conta.sacar(450)
console.log(`Saque 400`); // acesso a um método público para sacar
console.log(conta.getSaldo()); // acesso a um método público para obter o saldo da conta