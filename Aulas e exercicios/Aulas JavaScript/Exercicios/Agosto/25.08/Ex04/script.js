/* 
    Faça um programa que dada a idade de um nadador, classifique-o em uma das seguintes categorias:
    - Infantil A = 5 a 7 anos
    - Infantil B = 8 a 11 anos
    - Juvenil A = 12 a 13 anos
    - Juvenil B = 14 a 17 anos
    - Adultos = Maiores de 18 anos
*/

var idade = parseInt(prompt('Informe sua idade'));

if(idade <= 7) {
    document.write('Classificação: Infantil A');
} else if(idade >= 8, idade <= 11) {
    document.write('Classificação: Infantil B');
} else if(idade >= 12, idade <= 13) {
    document.write('Classificação: Juvenil A');
} else if(idade >= 14, idade <= 17) {
    document.write('Classificação: Juvenil B');
} else {
    document.write('Classificação: Adulto - Maior de 18');
}