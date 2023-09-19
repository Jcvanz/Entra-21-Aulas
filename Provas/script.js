// Variáveis
var numAlunos = 10, numAvaliacoes = 4;
var nomeAluno, frequencia
// Loop para pegar informações de cada aluno
for (let alunoNum = 1; alunoNum <= numAlunos; alunoNum++) {
  nomeAluno = prompt(`Digite o nome do ${alunoNum}° aluno:`);
  frequencia = parseFloat(prompt(`Digite a frequência do ${alunoNum}° aluno (%):`));
  
  // Variáveis para as notas e a média
  var notas = [];
  let media = 0;
  
  // Pegando as notas do aluno
  for (let avaliacaoNum = 1; avaliacaoNum <= numAvaliacoes; avaliacaoNum++) {
    var nota = parseFloat(prompt(`Digite a nota da avaliação ${avaliacaoNum} para ${nomeAluno}:`));
    notas.push(nota);
    media += nota;
}

// Calculando a média
media /= numAvaliacoes;

// Verificando a situção do aluno
let situacao = "";
if (frequencia < 75) {
    situacao = "Reprovado por frequência";
} else if (media < 5.5) {
    situacao = "Reprovado";
} else if (media >= 5.5 && media <= 7.49) {
    situacao = "Em Recuperação";
} else {
    situacao = "Aprovado";
}

// Escrevendo o boletim do aluno
document.write(`
    ****************** Boletim Escolar ***********************  <br>
    Aluno: ${nomeAluno} Situação: ${situacao}                   <br>
    Notas: ${notas.join(" - ")} Média: ${media.toFixed(2)}      <br>
    *********************************************************** <br>
`)
}