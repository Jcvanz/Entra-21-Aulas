/* 
    Faça um programa que faça 5 perguntas para uma pessoa sobre um crime.
    As perguntas são:
    “Telefonou para a vítima? “
    “Esteve no local do crime?”
    “Mora perto da vítima? “
    “Devia para a vítima? “
    “Já trabalhou com a vítima? “
    O programa deve no final emitir uma classificação sobre a participação da
    pessoa no crime. Se a pessoa responder positivamente a 2 questões ela
    deve ser classificada como “Suspeita”, entre 3 e 4 como “Cúmplice” e 5
    como “Assassino“. Caso contrário, ele será classificado como “Inocente“.
*/

var positivo = 0, ask;

ask = prompt("Telefonou para a vítima? (S/N)")
if(answer.toLowerCase() === 's') {
    positivo++;
}

ask = prompt("Esteve no local do crime? (S/N)")
if(answer.toLowerCase() === 's') {
    positivo++;
}

ask = prompt("Mora perto da vítima? (S/N)")
if(answer.toLowerCase() === 's') {
    positivo++;
}

ask = prompt("Devia para a vítima? (S/N)")
if(answer.toLowerCase() === 's') {
    positivo++;
}

ask = prompt("Já trabalhou com a vítima? (S/N)")
if(answer.toLowerCase() === 's') {
    positivo++;
}

if (positivo === 5) {
    document.write("Classificação: Assassino");
} else if (positivo >= 3) {
    document.write("Classificação: Cúmplice");
} else if (positivo === 2) {
    document.write("Classificação: Suspeito");
} else {
    document.write("Classificação: Inocente");
}