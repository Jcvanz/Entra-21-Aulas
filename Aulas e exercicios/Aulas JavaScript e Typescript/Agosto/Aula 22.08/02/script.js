/*
    WHILE

    - Relaiza um teste condicional logo no seu inicio, para verificar se 
    os laços serãoou não executado.
    - São usados principalmente em programas que manipulam arquivos, para 
    repetir a leitura de uma linha enquanto não atingir o final do arquivo.

    EX: 
        WHILE (condição) {
            comandos;
        }
*/

// var faixa1 = 0,
// faixa2 = 0,
// faixa3 = 0,
// faixa4 = 0,
// fimProg = 'n',
// faixa;

// while (fimProg == 'n') {
//     faixa = parseInt(prompt('Informe a faixa'));
//     switch (faixa) {
//         case 1: faixa1 += 1;
//         break;
//         case 2: faixa2 += 1;
//         break;
//         case 3: faixa3 += 1;
//         break;
//         case 4: faixa4 += 1;
//         break;
//     }
//     fimProg = prompt('Finalizar programa? (S/N)');
// }

// document.write(`Pronto socorro: ${faixa1} </br>`);
// document.write(`Urgêntes: ${faixa2} </br>`);
// document.write(`Pouco urgênte: ${faixa3} </br>`);
// document.write(`Não urgênte: ${faixa4}`);

/* 
    FOR

    - A sintaxe do comando FOR é composta por três instruções:
    - O valor inicial da variavel de controle;
    - A condição que determina se a repetição deve ou não continuar;
    - O incremento ou decremento da variavel de controle

    EX:
        for(var i = 1; i <= 10; i++) {
            comando1;
            comando2;
        }
*/

var faixa1 = 0,
faixa2 = 0,
faixa3 = 0,
faixa4 = 0,
faixa;

for (var i = 1; 1 <= 4; i++) {
    faixa = parseInt(prompt('Informe a faixa'));
    switch (faixa) {
        case 1: faixa1 += 1;
        break;
        case 2: faixa2 += 1;
        break;
        case 3: faixa3 += 1;
        break;
        case 4: faixa4 += 1;
        break;
    }
}

document.write(`Pronto socorro: ${faixa1} </br>`);
document.write(`Urgêntes: ${faixa2} </br>`);
document.write(`Pouco urgênte: ${faixa3} </br>`);
document.write(`Não urgênte: ${faixa4}`);