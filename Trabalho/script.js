/* 
    Simulação de cadastro e compra de produtos
    Crie um programa que o usuário consiga cadastrar produtos, ver a listagens de produtos já 
    cadastrados, encerre o programa e finalize uma compra, onde o usario consiga pagar cada 
    produto de uma vez e o usuário pode escolher a forma de pagamento entre débito, crédito,
    pix ou dinheiro.
*/

let unidadesProduto, listaProdutos = [], nomeProduto, totalProduto, finalizaCompra, valorProduto;
let opcao = 0

while (opcao !== 4) {
    opcao = parseInt(prompt(`
    1 - Realizar compra
    2 - Cadastrar um produto
    3 - Listagem de produtos
    4 - Encerrar o programa`));

    if (opcao === 1){
        nomeProduto = prompt(`Lista de produtos disponíveis: ${listaProdutos.length === 0 ? 'Nenhum produto cadastrado': listaProdutos.join(', ')};
        Qual você quer comprar?`);
        valorProduto = parseFloat(prompt(`Qual o valor do produto por unidade?: (${nomeProduto}) `));
        unidadesProduto = parseFloat(prompt(`Quantas unidades? ${nomeProduto}`));
        totalProduto = unidadesProduto * valorProduto;
        finalizaCompra = prompt(`Valor total R$${totalProduto.toFixed(2)} - ${nomeProduto}. Deseja finalizar a compra? (S/N)`).toUpperCase();
        if (finalizaCompra === 'S') {
            opcaoCompra = prompt(`Como realizar o pagamento?
            1 - Débito
            2 - Crédito
            3 - PIX
            4 - Dinheiro`);
        }
        
        alert('Realizando pagamento... :) ');
        totalProduto = 0;
    }

    if (opcao === 2) {
        nomeProduto = prompt('Qual o nome do produto? ');
        listaProdutos.push(nomeProduto);
    }

    if (opcao === 3) {
        alert(`Listagem de produtos cadastrados: ${listaProdutos.length === 0 ? 'Nenhum produto cadastrado': listaProdutos.join(', ')}`);
    }
}