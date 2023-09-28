/* 
    Escreva um programa que leia um conjunto de números positivos que 
    serão informados pelo usuário, e apresente qual foi o maior e o menor 
    a cada interação, isso é cada vez que o usuário informar um número valide
    se ele é o menor ou o maior já digitado. Quando o usuário desistir 
    de informar ele deve ter opção de sair. 
*/

var maior = Number.NEGATIVE_INFINITY; // Inicializa o maior número com o menor valor possível
var menor = Number.POSITIVE_INFINITY; // Inicializa o menor número com o maior valor possível

while (true) {
  var pergunta = prompt("Informe um número positivo (ou digite 'sair' para encerrar):");

  if (pergunta === "sair") {
    break; // Sai do loop quando o usuário digitar "sair"
  }

  const numero = parseFloat(pergunta);

  if (!isNaN(numero) && numero > 0) {
    // Verifica se o número é positivo e válido
    if (numero > maior) {
      maior = numero;
    }

    if (numero < menor) {
      menor = numero;
    }
  } else {
    alert("Por favor, insira um número positivo válido.");
  }
}

if (maior === Number.NEGATIVE_INFINITY && menor === Number.POSITIVE_INFINITY) {
  alert("Nenhum número válido foi informado.");
} else {
  alert(`O maior número informado foi: ${maior}\nO menor número informado foi: ${menor}`);
}