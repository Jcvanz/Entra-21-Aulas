// CALCULADORA

var operacao, numero1, numero2, result;

operacao = prompt('Informe a operação');
numero1 = parseInt(prompt('Escreva um número'));
numero2 = parseInt(prompt('Escreva outro número'));

// Usando IF e ELSE
if (operacao == '+') {
    result = numero1 + numero2;
    document.write(`${numero1} + ${numero2} = ${result}`);
} else if (operacao == '-') {
    result = numero1 - numero2;
    document.write(`${numero1} - ${numero2} = ${result}`);
} else if (operacao == '*') {
    result = numero1 * numero2;
    document.write(`${numero1} * ${numero2} = ${result}`);
} else if (operacao == '/') {
    result = numero1 / numero2;
    document.write(`${numero1} / ${numero2} = ${result}`);
} else {
    document.write('Informe um operador válido');
}

// Usando SWITCH e CASE
switch (operacao) {
    case '+': 
        result = numero1 + numero2;
        document.write(`${numero1} + ${numero2} = ${result}`);
        break;
    case '-':
        result = numero1 - numero2;
        document.write(`${numero1} - ${numero2} = ${result}`);
        break; 
    case '*': 
        result = numero1 * numero2;
        document.write(`${numero1} * ${numero2} = ${result}`);
        break;
    case '/': 
        result = numero1 / numero2;
        document.write(`${numero1} / ${numero2} = ${result}`);
        break;
}