// "Banco de dados"
const paciente = [];

function cadastro() {
    // Funções para salvar os cadastros
    const nome = document.getElementById('name').value;
    const cpf = document.getElementById('cpf').value;
    const dataNasc = document.getElementById('data-nasc').value;
    const vacinas = document.getElementById('vacinas').value;
    const dataVac = document.getElementById('data-vacina').value;

    // Adicionar o cadastro ao "Banco de dados"
    paciente.push({nome, cpf, dataNasc, vacinas, dataVac});

    // Limpar o formulário
    document.getElementById("cad-paciente").reset();

    // Mensagem de confirmação
    alert("Paciente cadastro com sucesso!");

    // Att na tela os pacientes
    listPacient();
}

// Event listener para o formulário de cadastro
document.getElementById("cad-paciente").addEventListener("submit", function(e) {
    // Impede o envio do formulário padrão
    e.preventDefault(); 
    cadastro();
});

listPacient();

function listPacient() {
    const listarPaciente = document.getElementById('listar-paciente');
    listarPaciente.innerHTML = '';

    paciente.forEach(list => {
        // Cria um elemento 'LI' para listar os pacientes me tela
        const listItem = document.createElement('li');
        listItem.textContent = `
            Nome: ${list.nome}
            CPF: ${list.cpf}
            Data de nascimento: ${list.dataNasc}
            Tipo de vacina: ${list.vacinas}
            Data da vacina: ${list.dataVac}
        `;
        listarPaciente.appendChild(listItem);
    });
}