/* 
    Faça um programa que pergunte em que turno você estuda. Peça
    para digitar
    ● M - matutino
    ● V - vespertino
    ● N - noturno
    Imprima a mensagem:
    ● “Bom dia!”
    ● “Boa Tarde!”
    ● “Boa Noite”
    ou “Valor inválido”, conforme o caso.
*/  

var turno = prompt('Informe o turno em que você estuda:\nM -Matutino\nV - Vespertino\nN - Noturno');

if(turno == 'M' || turno == 'm') {
    alert('Bom dia!');
} else if(turno == 'V' || turno == 'v') {
    alert('Boa tarde!');
} else if(turno == 'N' || turno == 'n') {
    alert('Boa noite!');
} else {
    alert('[ERROR] Informe um valor válido');
}