/* 
    As organizações Viva Bem resolveram dar um aumento de salário aos seus
    colaboradores e lhe contrataram para desenvolver o programa que calcula os
    reajustes.
    Faça um programa que recebe o salário de um colaborador e o reajuste
    segundo o seguinte critério, baseado no salário atual:
    ❑ Salários até RS 280,00 (incluindo): aumento de 20%;
    ❑ Salários entre RS 280,00 e RS 700,00: aumento de 15%;
    ❑ Salários entre RS 700,00 e RS 1.500,00: aumento de 10%;
    ❑ Salários de RS 1500,00 em diante: aumento de 5% Após o aumento ser
    realizado;
    Informe na tela os seguintes dados:
    ✔ O salário antes do reajuste;
    ✔ O percentual de aumento aplicado;
    ✔ O valor do aumento;
    ✔ O novo salário, após o aumento.
*/

var reajuste, salario = parseFloat(prompt('Informe seu salário'));
if (salario <= 280) {
    reajuste = salario * (20 / 100);
    reajuste += salario;
} else if (salario > 280 || salario <= 700) {
    reajuste = salario * (15 / 100);
    reajuste += salario;
} else if (salario > 700 || salario <= 1500) {
    reajuste = salario * (10 / 100);
    reajuste += salario;
} else if (salario > 1500) {
    reajuste = salario * (5 / 100);
    reajuste += salario;
} else {
    document.write('Informe um número válido');
}

document.write(`Salário atual: ${salario.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})} <br>`);
document.write(`Salário com reajuste ${reajuste.toLocaleString('pt-br', {style:'currency', currency: 'BRL'})}`);