/* 
    Escreva um programa que calcule e exiba a soma dos quadrados
    dos 20 primeiros números inteiros positivos ímpares a partir do
    número informado pelo usuário menor que 10 e maior que zero
*/

var numInteiros = parseInt(prompt('Informe um número entre 1 e 9'));
var contador = 0, somaQuadrados = 0;

if(numInteiros > 0 && numInteiros < 10) {
    while(contador < 20) {
        if(numInteiros % 2 !== 0) {
            somaQuadrados += numInteiros ** 2;
            contador++;
        }
    }
    numInteiros++;
} else {
    alert('[ERROR] Informe um caracter válido');
}
alert(`Resultado: ${somaQuadrados}`)
