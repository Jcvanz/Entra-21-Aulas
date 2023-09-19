var numero = parseInt(prompt('Informe um número entre 1 e 10'));
document.write(`Tabuada do ${numero}: <br>`);

// Gerar tabuada
for (let i = 1; i <= 10; i++) {
    var result = numero * i;
    document.write(`${numero} x ${i} = ${result} <br>`);
}