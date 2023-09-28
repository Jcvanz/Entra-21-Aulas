/* 
    Peça ao usuário para informar 6 números e alimente um vetor Leia um vetor de 
    elementos numéricos inteiros, calcule e mostre:
        a) A quantidade de números pares 
        b) quais os números pares 
        c) A quantidade de números ímpares 
        d) quais os números ímpares
*/

var numbers = [];

for(let i = 1; i <= 6; i++) {
    let ask = parseInt(prompt(`Informe o ${i} número`));

    if(ask !== NaN) {
        numbers.push(ask)
    } else {
        alert('Informe um número válido');
        i--;
    }
}

var qtnPares = 0, qntImpar = 0;
var numberPar = [], numberImpar = [];

for(ask of numbers) {
    if(ask % 2 === 0) {
        numberPar.push(ask);
        qtnPares++;
    } else {
        numberImpar.push(ask);
        qntImpar++;
    }
}

document.write(`Quantidade de números pares: ${qtnPares}<br>`);
document.write(`Números pares: ${numberPar.join(", ")}<br>`);
document.write(`Quantidade de números ímpares: ${qntImpar}<br>`);
document.write(`Números ímpares: ${numberImpar.join(", ")}<br>`);