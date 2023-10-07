// Array para salvar os dados dos pacientes cadastrados
var dadosPaciente = [];
function cadastro() {
    // Constantes para salvar os cadastros
    var nome = document.getElementById('name').value;
    var cpf = document.getElementById('cpf').value;
    var dataNasc = document.getElementById('data-nasc').value;
    var tipoVacinas = document.getElementById('vacinas').value;
    var dataVac = document.getElementById('data-vacina').value;
    // Constante para salvar os dados da data de retorno
    var dataRetorno = calcRetorno(dataVac);
    // Constantes para salvar os dados das datas formatadas
    var dataRetornoNasc = formataData(dataNasc);
    var dataRetornoVac = formataData(dataVac);
    // Add o cadastro ao array
    dadosPaciente.push({ nome: nome, cpf: cpf, dataRetornoNasc: dataRetornoNasc, tipoVacinas: tipoVacinas, dataRetornoVac: dataRetornoVac, dataRetorno: dataRetorno });
    // Limpar o formulário
    document.getElementById('cad-paciente').reset();
    // Atualiza na tela os pacientes
    listPacient();
}
// Event listener para o formulário de cadastro
var cadastroForm = document.getElementById("cad-paciente").addEventListener("submit", function (e) {
    // Impede o envio do formulário padrão
    e.preventDefault();
    cadastro();
});
listPacient();
// Função para listar os pacientes em tela
function listPacient() {
    var listarPaciente = document.getElementById('listar-paciente');
    listarPaciente.innerHTML = '';
    // Percorre o elemento com o forEach e imprime os elementos em tela
    dadosPaciente.forEach(function (list) {
        // Cria um elemento 'LI' para listar os pacientes me tela
        var listItem = document.createElement('li');
        listItem.textContent = "\n            Nome: ".concat(list.nome, "\n            CPF: ").concat(list.cpf, "\n            Data de nascimento: ").concat(list.dataRetornoNasc, "\n            Tipo de vacina: ").concat(list.tipoVacinas, "\n            Data da vacina: ").concat(list.dataRetornoVac, "\n            Data para a segunda dose: ").concat(list.dataRetorno, "\n        ");
        // Adiciona o elemento na página através do appendChild
        listarPaciente.appendChild(listItem);
    });
}
// Função para calcular a data de retorno, 30 dias após a data da vacinação (Feito com a ajuda do Eduardo)
function calcRetorno(dataVacina) {
    // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
    var vacinacao = new Date(dataVacina.replace(/-/g, '\/'));
    vacinacao.setDate(vacinacao.getDate() + 30);
    // Locale pt-BR
    return vacinacao.toLocaleDateString();
}
// Função para formatar a data para DD/MM/AAAA
var formataData = function (data) {
    var _a = data.split('-'), year = _a[0], month = _a[1], day = _a[2];
    return "".concat(day, "/").concat(month, "/").concat(year);
};
