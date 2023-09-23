// MAP:

const automoveis = new Map([
    ['BMW', 2020],
    ['MERCEDES', 2022],
    ['LAMBORGINI', 2010],
    ['AUDI', 2000],
    ['BUGATTI', 2023],
    ['FERRARI', 2012],
]);

var auto = prompt('Informe a marca do automóvel:\nBMW | MERCEDES | AUDI | BUGATTI | FERRARI | LAMBORGINI').toUpperCase();
var resultPesquisa = automoveis.get(auto);

if(typeof(resultPesquisa) === 'undefined') {
    alert(`[ERROR]: ${auto} não encontrado`);
} else {
    document.getElementById('automovel').innerHTML = automoveis.get(auto);
}

// SET:

// var setVazio = new Set();
var setNumeros = new Set([1, 2, 3]);

/* 
    Podemos converter um set de volta para array usando o método Array.from().
    - var set = new Set([1, 2, 3]); = {1, 2, 3}
    - var arr = Array.from(Set); = [1, 2, 3]
*/

// Pesquisando num Set
if(setNumeros.has(0)) {
    alert('Achei o nr 0');
} else {
    alert('Não achei o nr 0')
}

if(setNumeros.has(2)) {
    alert('Achei o nr 2');
} else {
    alert('Não achei o nr 2')
}

// adicionando com Set
setNumeros.add(3);
console.log(setNumeros);
setNumeros.add(4); // {1,2,3,4}
console.log(setNumeros);