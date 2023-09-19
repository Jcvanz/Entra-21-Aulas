/*
    Desenvolva uma aplicação que permita informar 
    as notas das avaliações de dois alunos.
    Cada aluno tem duas avaliações.
    Calcule a média e informe se está aprovado ou reprovado.
    Aprovado  -> média >= 7
    Reprovado -> média < 7
*/

// Usando While
// variável para controlar qtde de alunos lidos
var qtdAlunos = 1, qtdNotas = 1, notaAluno = 0.0, acumNotas = 0.0;
var mediaAluno = 0.0;
var nomeAluno = "";

// laço para controlar leitura de alunos
while (qtdAlunos <= 2) {
    nomeAluno = prompt("Informe o nome do aluno nr " + qtdAlunos);
    // para cada aluno vai começar o nr de notas em 1 e zerar o acumulador de notas ("M+")
    qtdNotas = 1;
    acumNotas = 0.0;
    while (qtdNotas <= 2) {
        notaAluno = parseFloat(prompt("Informe a nota nr " + qtdNotas + " do aluno " + nomeAluno));
        //acumNotas+= notaAluno; <= outra forma de acumular as notas
        acumNotas = acumNotas + notaAluno;
        qtdNotas++;
    }
    mediaAluno = acumNotas / 2;
    
    if (mediaAluno >= 7){
        document.write("O aluno " + nomeAluno + " está aprovado com media = " + mediaAluno + "<br>");
    } else {
        document.write("O aluno " + nomeAluno + " está reprovado com media = " + mediaAluno + "<br>");
    }
    /* 
       incrementa qtdAlunos para em algum momento quebrar a condição
       do while 
    */
    qtdAlunos++;
}

document.write("Programa Finalizado...");


// Usando For
// variável para controlar qtde de alunos lidos
var notaAluno = 0.0, acumNotas = 0.0;
var mediaAluno = 0.0;
var nomeAluno = "";

// laço para controlar leitura de alunos
for (var qtdAlunos = 1;qtdAlunos <= 2;qtdAlunos++) {
    nomeAluno = prompt("Informe o nome do aluno nr " + qtdAlunos);
    // para cada aluno vai começar o nr de notas em 1 e zerar o acumulador de notas ("M+")
    qtdNotas = 1;
    acumNotas = 0.0;
    for (var qtdNotas = 1;qtdNotas <= 2;qtdNotas++) {
        notaAluno = parseFloat(prompt("Informe a nota nr " + qtdNotas + " do aluno " + nomeAluno));
        //acumNotas+= notaAluno; <= outra forma de acumular as notas
        acumNotas = acumNotas + notaAluno;
    }
    mediaAluno = acumNotas / 2;
    if (mediaAluno >= 7){
        document.write("O aluno " + nomeAluno + " está aprovado com media = " + mediaAluno + "<br>");
    } else {
        document.write("O aluno " + nomeAluno + " está reprovado com media = " + mediaAluno + "<br>");
    }
}

document.write("Programa Finalizado...");