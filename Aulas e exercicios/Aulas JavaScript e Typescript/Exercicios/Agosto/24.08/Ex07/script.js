/* 
    1. Faça um programa que imprima os números de 1 a 10 em ordem
    crescente utilizando a a estrutura de laço de repetição.

    2. Faça um programa que imprima os números pares de 0 a 20 utilizando a
    estrutura de laço de repetição.

    3. Faça um programa que leia uma sequência de números inteiros e imprima
    o maior número digitado. O programa deve parar de ler números quando o
    usuário digitar o número -1.

    4. Faça um programa que imprima a tabuada de multiplicação de um
    número digitado pelo usuário. Utilize a estrutura de laço de repetição.

    5. Faça um programa que imprima a soma de todos os números pares de 1 a
    100 utilizando a a estrutura de laço de repetição.

    6. Faça um programa que leia uma sequência de números inteiros e imprima
    apenas os números pares. O programa deve parar de ler números quando o
    usuário digitar o número -1.

    7. Faça um programa que leia uma sequência de números inteiros e calcule
    a média. O programa deve parar de pedir números quando o usuário digitar
    o número -1. Utilize a estrutura de repetição for.

    8. Faça um programa que leia uma sequência de números inteiros e imprima
    apenas os números ímpares. O programa deve parar de ler números quando
    o usuário digitar o número 0.
*/

// Exercicio 1
document.write(`Exercicio 1 <br>`);
for (let numbers = 1; numbers <= 10; numbers++) {
    document.write(`${numbers} <br>`);
}

// Exercicio 2
document.write(`<br> Exercicio 2`);
for (let numbersPars = 0; numbersPars <= 20; numbersPars += 2) {
    document.write(`<br>${numbersPars}`);
}

//Exercicio 4
document.write(`<br> <br> Exercicio 4`);
var numero  = parseInt(prompt('Digite um número para a tabuada de multiplicação:'));

if (numero != NaN) {
    document.write(`<br> Tabuada de multiplicação do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      document.write(`<br> ${numero} x ${i} = ${resultado}`);
    }
} else {
    document.write("<br> Por favor, digite um número válido.");
}

//Exercicio 5
document.write(`<br> <br> Exercicio 5`);
var soma = 0;
for (let i = 2; i <= 100; i += 2) {
    soma += i;
}
document.write(`<br> A soma dos números pares de 1 a 100 é: ${soma}<br>`);

