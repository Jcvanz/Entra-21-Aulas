class Lampada {
    constructor(fabricante, numPeca, tipoFontEnergia, voltagem, potWatts, qntPacote, peso, comprimento, cor) {
        this.fabricante = fabricante;
        this.numPeca = numPeca;
        this.tipoFontEnergia = tipoFontEnergia;
        this.voltagem = voltagem;
        this.potWatts = potWatts;
        this.qntPacote = qntPacote;
        this.peso = peso;
        this.comprimento = comprimento;
        this.cor = cor;
    }

    ligar() {
        console.log('Ligou a lampada');
    }

    desligar() {
        console.log('Desligou a lampada');
    }

    vender() {
        console.log('Vendeu a lampada');
    }

    comprar() {
        console.log('Comprou a lampada');
    }

    qntEstoque() {
        
    }
}

