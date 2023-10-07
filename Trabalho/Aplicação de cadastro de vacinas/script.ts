// Estrutura dos dados de cadastro
interface Paciente {
    nome: string;
    cpf: string;
    dataRetornoNasc: string;
    tipoVacinas: string;
    dataRetornoVac: string;
    dataRetorno: string;
}

// Array para salvar os dados dos pacientes cadastrados
const dadosPaciente: Paciente[] = [];

function cadastro() {
    // Constantes para salvar os cadastros
    const nome = (document.getElementById('name') as HTMLInputElement).value;
    const cpf = (document.getElementById('cpf') as HTMLInputElement).value;
    const dataNasc = (document.getElementById('data-nasc') as HTMLInputElement).value;
    const tipoVacinas = (document.getElementById('vacinas') as HTMLInputElement).value;
    const dataVac = (document.getElementById('data-vacina') as HTMLInputElement).value;
    // Constante para salvar os dados da data de retorno
    const dataRetorno = calcRetorno(dataVac) as string;
    // Constantes para salvar os dados das datas formatadas
    const dataRetornoNasc = formataData(dataNasc) as string;
    const dataRetornoVac = formataData(dataVac) as string;
    // Add o cadastro ao array
    dadosPaciente.push({nome, cpf, dataRetornoNasc, tipoVacinas, dataRetornoVac, dataRetorno});
    // Limpar o formulário
    (document.getElementById('cad-paciente') as HTMLFormElement).reset();
    // Atualiza na tela os pacientes
    listPacient();
}

// Event listener para o formulário de cadastro
const cadastroForm = (document.getElementById("cad-paciente") as HTMLFormElement).addEventListener("submit", function(e) {
    // Impede o envio do formulário padrão
    e.preventDefault(); 
    cadastro();
});

listPacient();
// Função para listar os pacientes em tela
function listPacient() {
    const listarPaciente = (document.getElementById('listar-paciente') as HTMLUListElement);
    listarPaciente.innerHTML = '';
    // Percorre o elemento com o forEach e imprime os elementos em tela
    dadosPaciente.forEach(list => {
        // Cria um elemento 'LI' para listar os pacientes me tela
        const listItem = document.createElement('li');
        listItem.textContent = `
            Nome: ${list.nome}
            CPF: ${list.cpf}
            Data de nascimento: ${list.dataRetornoNasc}
            Tipo de vacina: ${list.tipoVacinas}
            Data da vacina: ${list.dataRetornoVac}
            Data para a segunda dose: ${list.dataRetorno}
        `;
        // Adiciona o elemento na página através do appendChild
        listarPaciente.appendChild(listItem);
    });
}

// Função para calcular a data de retorno, 30 dias após a data da vacinação (Feito com a ajuda do Eduardo)
function calcRetorno(dataVacina: string): string {
    // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
    const vacinacao = new Date(dataVacina.replace(/-/g, '\/'));
    vacinacao.setDate(vacinacao.getDate() + 30);
    // Locale pt-BR
    return vacinacao.toLocaleDateString();
}

// Função para formatar a data para DD/MM/AAAA
const formataData = (data: string) => {
    const [year, month, day] = data.split('-');
    return `${day}/${month}/${year}`;
}
