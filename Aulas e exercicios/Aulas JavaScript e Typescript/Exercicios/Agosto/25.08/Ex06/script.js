/* 
    Dada uma seqüência de n números (vetor de inteiros), 
    imprimi-la na ordem inversa que foi realizada a leitura.
*/

var numeros = [];

while(true) {
    let ask = parseFloat(prompt('Informe um numero ou deixe digite -1 para sair'));
    if(ask === -1) {
        break;
    }

    if(ask > 0) {
        numeros.push(ask);
    } else {
        alert('Insira um número válido');
    }

}

document.write(`Sequência de números na ordem inversa:<br>`);

for(let i = numeros.length - 1; i >= 0; i--) {
    document.write(`${numeros[i]}<br>`);
}