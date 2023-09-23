/* 
    Declarar um vetor vazio:
    -> var vetorNumeros = []

    Comando FOR padrão
    for (let i = 0; i < 5; i++) {
        vetorNumeros[i] = prompt
    }

    -> Escreva um algoritimo que solicite a entrada de 5 números e que exiba o 
    somatório desses números na tela. Após exibir a soma, o programa deve mostrar 
    também os números que o usuário digitou, um por linha. 
*/

// var vetorNumeros = [];

// document.write(vetorNumeros);
// for(let i = 0; i < 5; i++) {
//     vetorNumeros[i] = parseFloat(prompt('Digite um número'));
// }

// for(let i = 0; i < 5; i++) {
//     vetorNumeros++;
// }

// document.write(vetorNumeros);

/* 
    Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes, e que 
    exiba a lista desses nomes na tela. Após exibir essa lista, o programa deve 
    mostrar também os nomes na ordem inversa em que o usuário os digitou, um 
    por linha.
*/

var nome = [];

for(let i = 0; i < 5; i++) {
    nome[i] = prompt('Digite um nome');
}

document.write(nome);

