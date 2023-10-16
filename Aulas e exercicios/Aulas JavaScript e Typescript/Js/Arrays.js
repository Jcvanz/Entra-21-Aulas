/* 
    ARRAYS:

    - São listas; 
    - Podemos inserir valores de qualquer tipo de dado;
    - Cada valor é separado do outro por vírgula.

    Ex:
    const lista = [1, 2, 3, 4];
*/

/* 
    PROPRIEDADES:

    - Propriedades são como informações de um objeto;
    - Os arrays tem propriedades, assim como outros tipos de dados;
    - As propriedades podem ser acessadas por notação de pont ou colchetes: dado.PROPRIEDADE ou dado['PROPRIEDADE'];

    Ex:
    const listNumbers = [1, 3, 5];
    console.log(listNumbers.length)
    console.log(listNumbers['length'])

    - Podemos acessar qualquer propriedade dentro de um array.
    
    Ex: 
    const listNumbers = [1, 2, 3]
    console.log(listNumbers[0]) // retorna o 1
    console.log(listNumbers[1]) // retorna o 2
    console.log(listNumbers[2]) // retorna o 3
*/

/* 
    MÉTODOS:

    - Métodos são como funções, acessamos com notação de ponto e utilizamos () para invocar;
    - Objetos são compostos por métodos e propriedades;
    - Como muitos dados são objetos em JS, temos métodos e propriedades neles.

    Ex: 
    - CONCAT = Une os arrays
    const list = [1, 2, 3];
    const outraList = [ 4, 5, 6];
    const allNumbers = list.concat(outraList);

    - ToUpperCase = deixa todas as letras em maiúsculo 
    - ToLowerCase = deixa todas as letras em minúsculo
*/

/* 
    OBJETOS:

    - Em JS temos um tipo de dado que é o objeto, mas seu nome é object literals;
    - Isso porque o objeto vem da orientação a objetos, com outros recusos: herança, instância...
    - Já o literals possui apenas propriedades e métodos;
    - O objeto fica em um bloco de {}.
    
    Ex: 
    const list = {
        nome: 'Julio',
        idade: 20
    }

    - Podemos acessas essas propriedades.
    
    console.log(list.nome)
*/

/* 
    REMOVENDO E CRIANDO NOVAS PROPRIEDADES:

    - Para adicionar uma nova propriedade a um objeto, utilizamos a notação de ponto e atribuímos um valor;
    - Já para excluir, vamos utilizar o operador delete na propriedade alvo.

    Ex:
    
    - Para adicionar:
    const car = {
        engine: 2.0,
        brand: "VW",
        model: "Tiguan",
        Km: 20000
    }
    car.doors = 4;

    - Para deletar:
    const car = {
        engine: 2.0,
        brand: "VW",
        model: "Tiguan",
        Km: 20000
    }
    delete car.km;
*/

