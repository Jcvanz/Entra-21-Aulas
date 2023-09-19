/* 
    Faça um programa que peça para o usuário informar um ano. Apresente em
    tela se é ano Bissexto ou não
    calculo do ano bissexto:
    ano % 4, resultado for ZERO - ELE PODE SER BISSEXTO
    Se ano % 100, resultado for 0 não ano bissexto
*/
var ano = prompt('Informe um ano');

anoBissexto = ano % 4;

if(anoBissexto == 0) {
    alert('Ano bissexto');
} else {
    alert('Ano não bissexto');
}