/* 
    Faça um programa que verifique se uma letra digitada é “F” ou “M”.
    Conforme a letra escrever:
    ● F – Feminino,
    ● M- Masculino,
    ● Sexo inválido.“.
*/


// DO e WHILE
op = 0;
do {
    var sexo = prompt('Informe seu sexo (M/F/I)');
    var idade = prompt('Informe sua idade');
    if(sexo == 'F' || sexo == 'f' && idade >= 18) {
        alert('Sexo Feminino e maior de idade');
        op = 1;
    } else if(sexo == 'M' || sexo == 'm' && idade >= 18) {
        alert('Sexo Masculino e maior de idade');
        op = 1;
    } else if(sexo == 'I' || sexo == 'i' && idade >= 18){
        alert('Sexo idefinido e maior de idade');
        op = 1;
    } else {
        if(sexo == 'F' || sexo == 'f' && idade <= 18) {
            alert('Sexo Feminino e menor de idade');
            op = 1;
        } else if(sexo == 'M' || sexo == 'm' && idade <= 18) {
            alert('Sexo Masculino e menor de idade');
            op = 1;
        } else if(sexo == 'I' || sexo == 'i' && idade <= 18){
            alert('Sexo idefinido e menor de idade');
            op = 1;
        } else {
            alert('[ERR] Informe uma opção válida');
        }
    }

} while(op === 0);