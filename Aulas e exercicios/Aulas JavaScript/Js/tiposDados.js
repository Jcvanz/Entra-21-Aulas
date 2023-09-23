/* 
    TIPOS DE DADOS:
    - Number
    - String
    - Boolean
    - Empty values (null e undefined)
    - Objects

    Number: é o tipo de dado para valores númericos.
    
    OPERADORES ARITMÉTICOS:
    + = adição;
    - = subtração;
    * = multiplicação;
    / = divisão;

    OPERADORES LÓGICOS:
    && = AND - true apenas se os dois lados forem verdadeiros;
    || = OR - para ser true, um lado com true é suficiente;
    ! = NOT - inverte a comparação.
*/

/*
    String: é o tipo de dado para valores de textos.
    - Sempre devemos envolver com aspas (', "") ou crases (``);
    - \n e </br> servem para pular linhas;
    - \t serve para darmos um espaço em TAB.

    CONCATENAÇÃO:
    - Serve para unir dois ou mais textos;
    - Pode ser feito com aspas (', "") e com a utilização do +. Ex: alert('Esse é ' + 'um texto');
    - Também pode ser feito com template strings, utilizando crases (``), chamando cifrão e abrindo chaves (${}); 
    - Dentro das chaves chamamos as nossas variáveis ou qualquer código.
    Ex: alert(`Esse é um ${NOME DA VARIAVEL}`);
    Ex: alert(`A soma de ${2 + 2} é:`);
*/

/* 
    Booleans: possuem apenas dois valores (true e false).
    - Qualquer comparação, utilizando sinais <,>, ==, resulta em um boolean;
    - Ele é importante para estruturas de condição de repetição. 

    COMPARAÇÕES:
    Maior - >;
    Menor - <;
    Maior ou igual - >=;
    Menor ou igual - <=;
    Diferente - !=;
    Idêntico - ===;

    Ex: 5 > 20 = false
    Ex: 5 < 20 = true
    Ex: 10 == 10 = true;
    Ex: 10.5 == 10 = false;
    Ex: 5 <= 5 = true;
    Ex: 5.5 != 5 = true;
    Ex: 5 != 5 = false;
    Ex: 5 === 5 = true;
    Ex: 5.5 === 5 = false;

    Para ver se os dados são identicos usamos !==
    Ex: 5 !== '5' = true
    Ex: 5 != '5' = false
*/

// OPERADORES LÓGICOS:
// && = os dois valores precisam ser verdadeiros para retornar um TRUE, caso contrário só retornará FALSE
console.log(true && true); // resposta TRUE
console.log(true && false); // resposta FALSE
console.log(5 > 2 && 2 < 10); // resposta TRUE

// || - Apenas um valor precisa ser verdadeiro para retornar TRUE.
console.log(5 > 2 || 'Julio' === 1); // resposta TRUE, um lado é verdadeiro 
console.log(5 < 2 || 5 > 10); // resposta FALSE, nenhum lado é verdadeiro

// ! - Vai inverter os valores.
console.log(!true); // resposta FALSE
console.log(!5 > 2); // resposta FALSE
console.log(!5 < 2); // resposta TRUE

/* 
    Empty Values: Undefined e Null
    - Undefined geralmente é visto quando utilizamos um código que ainda não foi definido;
    - Null costuma ser imposto para determinar que não há inda um valor;
*/
console.log(null === undefined); // resposta FALSE, ele não é idêntico
console.log(null == undefined); // resposta TRUE, ele é igual, pois eles não possuem valores
console.log(null == false); // resposta FALSE
console.log(null == true); // resposta FALSE
console.log(undefined == true); // resposta FALSE
console.log(undefined == false); // resposta FALSE