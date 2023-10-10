class Aluno {
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
    }

    apresentar() {
        console.log(`Aluno: ${this.nome}, Matrícula: ${this.matricula}`);
    }
}

class Turma {
    constructor(nomeDaTurma) {
        this.nomeDaTurma = nomeDaTurma;
        this.alunos = []; // Um array para armazenar os objetos Aluno
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    listarAlunos() {
        console.log(`Turma: ${this.nomeDaTurma}`);
        console.log('Lista de Alunos:');
        this.alunos.forEach(aluno => {
        aluno.apresentar(); // Chama o método apresentar de cada aluno
        });
    }
}

// Criar objetos Aluno
const aluno1 = new Aluno('João', '12345');
const aluno2 = new Aluno('Maria', '54321');

// Criar objeto Turma e adicionar os alunos
const turmaA = new Turma('Turma A');
turmaA.adicionarAluno(aluno1);
turmaA.adicionarAluno(aluno2);

// Listar os alunos da turma
turmaA.listarAlunos();