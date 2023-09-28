/* 
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

//Exercicio 5
document.write(`Exercicio 5`);
var soma = 0;
for (let i = 2; i <= 100; i += 2) {
    soma += i;
}
document.write(`<br> A soma dos números pares de 1 a 100 é: ${soma}<br>`);

// Exercicio 6
document.write(`<br> Exercicio 6`);
// var numero;

// do {
//     numero = parseInt(prompt('Digite um número inteiro (ou -1 para parar):'));
//     if(numero != NaN) {
//         if(numero % 2 === 0) {
//             document.write(`<br> Número par: ${numero} <br>`);
//         }
//     } else if(numero === -1) {
//         prompt.close()
//     } else {
//         alert('Insira apenas números <br>')
//     }
// } while(numero != -1);

// Exercicio 7
document.write(`<br> Exercicio 7`);
// var soma = 0,
// contador = 0,
// numInteiro;

// for (;;) {
//     numInteiro = parseInt(prompt('Digite um número inteiro (ou -1 para parar):'));
//     if(numInteiro === -1) {
//         prompt.close();
//     } else if(numInteiro != NaN) {
//         soma += numInteiro;
//         contador++;
//     } else {
//         document.write('<br> Digite um número inteiro válido');
//     }

//     if(contador > 0) {
//         let media = soma / contador;
//         document.write(`<br> A média dos números digitador é: ${media}`);
//     } else {
//         document.write('<br> Nenhum número foi digitado');
//     }
// }

// Exercicio 7
document.write(`<br> Exercicio 8`);
var numberInte;

do {
    numberInte = parseInt(prompt('EX 08:\nDigite um número interio (ou 0 para parar)'));
    if(numberInte === 0) {
        prompt.close();
    } else if (numberInte != NaN) {
        if(numberInte % 2 !== 0) {
            document.write(`<br> Número Ímpar: ${numberInte}`);
        }
    } else {
        document.write(`<br> Digite um número inteiro válido`);
    }
} while(numberInte !== 0);


document.write(`<br> Exercicio 9`);
var notaAluno = 0, somaNotas = 0, freqAluno = 0;
var contadorNotas = 0;

freqAluno = parseFloat(prompt('Informe a frequência do aluno:'));
if(freqAluno < 80) {
    document.write('Aluno **REPROVADO** por frequência');
} else {
    while(contadorNotas < 3) {
        notaAluno = parseFloat(prompt('Informe a nota do aluno:'));
        somaNotas += notaAluno;
        contadorNotas++;
    }
    var mediaAluno = somaNotas / 3;
    if(mediaAluno > 7.5) {
        document.write(`Aluno **APROVADO** - Média: ${mediaAluno.toFixed(1)}`);
    } else {
        document.write(`Aluno **REPROVADO** - Média: ${mediaAluno.toFixed(1)}`);
    }
}