/* 
    FUNÇÕES:
    - São estruturas de códigos menores, podemos dividir nosso código em várias funções;
    - Faz nos poupar código, pois podemos utilizalas novamente;
    - A linguagem tem várias funções já criadas, e nos podemos criar as nossas.

    Definindo uma função:
    - Primeiro uyilizamos a palavra FUNCTION, isso inicia uma função;
    - Depois, precisamos nomeá-la;
    - Os parâmetros, que são uma espécie de configuração, ficam entre () depois o nome;
    - O corpo da função fica entre {};
    - Por fim, 'invocamos' ela fora das chaves;
    - Geralmente uma função retorna um valor.

    Ex:
    function nomeDaFuncao(PARÂMETROS) {
        \ CÓDIGO /
        console.log('Test');
    }
    
    \ INVOCANDO A FUNÇÃO /
    nomeDaFuncao();

    Declarando uma função com variável:
    const minhaFuncaoEmVariavel = function() {
        console.log('Function em variável');
    }
    
    \ INVOCANDO A FUNÇÃO /
    minhaFuncaoEmVariavel();

    Declarando uma função com parâmetro/argumento:
    function functionArgumento(txt) {
        console.log(`Imprimindo: ${txt}`);
    }
    
    \ INVOCANDO A FUNÇÃO /
    functionArgumento('Esse é um texto');
*/

// Declarando uma função:
function minhaFuncao() {
    console.log('Teste função')
}
minhaFuncao();

// Declarando uma função com variável:
const funcao = function() {
    console.log('teste função variavel')
}
funcao();

// Declarando uma função com parâmetro/argumento: 
function funcaoTxt(txt) {
    console.log(`Imprimindo ${txt}`)
}
funcaoTxt('Esse texto');

/* 
    RETORNO DAS FUNÇÕES:
    - O retorno serve para processarmos um valor dentro da função e retornamos 
    para o programa;
    - A palavra reservada para este recurso é RETURN;
    - Se não retornamos nada a função tem utilidade, mas não externaliza o que 
    acontece nela.

    Ex:
    const a = 10;
    const b = 20;
    const c = 30;

    function soma(n1, n2) {
        return n1 + n2;
    }
    console.log(soma(a, b))

    const resultado = b + c
    console.log(resultado)
*/

const a = 10;
const b = 20;
const c = 30;

function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(a, b));

const resultado = soma(a, c);
console.log(resultado);

/*
    ESCOPO DAS FUNÇÕES:
    - As funções tem um escopo separado do escopo do programa, que é o global;
    - Este escopo faz com que as variáveis de fora não funcionem dentro;
    - Podemos declarar novas variáveis, sem interferir nas já declaradas.

    Ex:
    let y = 20;

    function escopoFuncao() {
        let y = 15;
        console.log(`Y dentro da função: ${y}`);
    }

    escopoFuncao();

    console.log(`Y fora da função: ${y}`);

*/

let y = 20;

function escopoFuncao() {
    let y = 15;
    console.log(`Y dentro da função: ${y}`);
}

escopoFuncao();

console.log(`Y fora da função: ${y}`);

/* 
    ESCOPO ANINHADO (NESTED SCOPES)
    - As formas de criar variáveis, let e const, nos dão a possibilidade do 
    escopo aninhado;
    - Que consiste em ter em qualquer bloco a declaração de variáveis separadas
    dos outros escopos;
    - Um bloco é caracterizado por um código entre {}.

    Ex: 
    let m = 10;

    function escopoAninhado() {
        let m = 20;

        if(true) {
            let m = 30;

            if(true) {
                let m = 40;
                console.log(m)
            }
            console.log(m)
        }
        console.log(m)
    }
    escopoAninhado();
    console.log(m)
*/
let m = 10;

function escopoAninhado() {
    let m = 20;

    if(true) {
        let m = 30;

        if(true) {
            let m = 40;
            console.log(m)
        }
        console.log(m)
    }
    console.log(m)
}
escopoAninhado();
console.log(m)

/* 
    ARROW FUNCTION
    - Arrow function é uma outra forma que temos de criar funções;
    - É uma sintaxe resumida, que tem algumas diferenças das funções normais;
    - Ela é uma função anonima, então devemos colocar ela dentro de uma variável.

    Ex:

    const testeArrow = () => {
        console.log('Essa é uma arrow function');
    }
    testeArrow();

    const parOuImpar = (n) => {
        if(n % 2 === 0) {
            console.log('Par');
            return;
        } 
        console.log('Impar');
    }

    parOurImpar(5);
    parOurImpar(10);
*/

const testeArrow = () => {
    console.log('Essa é uma arrow function');
}
testeArrow();


let parOuImpar = (n) => {
    if(n % 2 === 0) {
        console.log('Par');
        return;
    } 
    console.log('Impar');
}
parOuImpar(10);
parOuImpar(15);

/* 
    - A arrow function pode ter uma sintaxe mais resumida;
    - Muito útil para funções pequenas;
    - Onde omitimos as {} e também a instrução de return.

    Ex:

    - Seguindo o ex de antes, ela seria assim:
    const raizQuadrada = (x) => {
        return x * x;
    }

    - Mas agora resumindo ela, podemos fazer assim:
    const raizQuadrada2 = (x) => x * x;
    console.log(raizQuadrada2(5))
*/

const raizQuadrada2 = (x) => x * x;
console.log(raizQuadrada2(5));

const hellow = () => 'Hellow';
console.log(hellow());

const hellow2 = () => console.log('Hellow'); 
hellow2();

/* 
    ARGUMENTOS OPCIONAIS:
    - Os argumentos/parâmetros nas funções são obrigatórios;
    - Porém há casos de funções que podemos funcionar sem algum dos argumentos;
    - Para resolver isso podemos fazer uma checagem do parâmetro com um IF.

    Ex:

    var multiplicacao = function(m, n) {
        if(n === undefined) {
            return m * 2;
        } else {
            return m * n;
        }
    }
    console.log(multiplicacao(5));
    console.log(multiplicacao(5, 9));
*/ 

const greeting = (name) => {
    if(!name) {
        console.log('Olá');
    } else {
        console.log(`olá ${name}`);
    }
}
greeting();
greeting('Julio');

// VALOR DEFAULT:
const customGreeting = (name, greet = 'Olá') => {
    return `${greet}, ${name}`
}
console.log(customGreeting('Julio'));
console.log(customGreeting('Julio', 'Bom dia'));


const somaNum = (n1, n2 = 3) => {
    return n1 + n2;
}
console.log(somaNum(5));
console.log(somaNum(5, 4));

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++) {
        console.log(text);
    }
};
repeatText('Teste');
repeatText('Teste com 5 repetições', 5);


/* 
    CLOSURE:
    - É um conjunto de funções, onde temos um reaproveitamento do escopo 
    interno de uma função;
    - Este escopo não pode ser acessado fora da função, já que é um bloco;
    - Há funções internas que aproveitam o escopo, e são chamadas de closure;
    - As closures também podem servir para salvar os resultados já executados;
    - Cria uma espécie de incrementação;
    - Tendo uma variável que executa uma função e modifica seu valor.
    
    Ex:
    function someFunction() {
        let txt = 'Algum texto'

        function display() {
            console.log(txt);
        }

        display();
    }
    someFunction();
*/ 
const multiplicationCloseru = (n) => {
    return (m) => {
        return n * m;
    };
}
const c1 = multiplicationCloseru(5);
const c2 = multiplicationCloseru(10);
console.log(c1(5));
console.log(c2(10));

/* 
    RECURSÃO
    - Um recurso que permite a função se autoinvocar continuamente;
    - Criamos uma espécie de loop;
    - É interessante definir uma condição final, para parar a execução.

    Ex:
    const untilTen = (n, m) => {
        if(n < 10) {
            console.log('Função parou');
        } else {
            const x = n - m;
            console.log(x);
            untilTen(x, m);
        }
    };
    untilTen(100 , 7)
*/
const untilTen = (n, m) => {
    if(n < 10) {
        console.log('Função parou');
    } else {
        const x = n - m;
        console.log(x);
        untilTen(x, m);
    }
};
untilTen(100 , 50)