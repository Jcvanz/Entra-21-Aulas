/* 
    Tipos de dados no Typescript

    -> Podemos utilizar a palavra reservada TYPE para criar um novo tipo, ou podemos
    atribuir diretamente no dado
    
    Ex:

    STRING:
    type nome = string
    const nome: nome = 'Julio'
        ou
    const string: string = 'Julio'

    BOOLEAN:
    const boolen: boolean = false
    
    NUMBER:
    const number: number = 20.1
    
    ARRAY:
    const array: number[] = [3,4,5,6,7]
    const array: string[] = ['Julio', 'Cesar', 'Paulo']
        ou
    const array: Array<number> = [3,4,5,6,7]
    const array: Array<string> = ['Julio', 'Cesar', 'Paulo']

    TUPLE:
    - usamos quando tivermos que tipar um array com dados diferentes e um 
    array que já sabe a quantidade de itens dentro dele

    const tuple: [string, number, boolean] = ['Julio', 3, false]

    OBJECT:
    type pessoa = {
        nome: string,
        idade: number,
        cidade: string
    }
    const pessoa = {
        nome: 'Julio',
        idade: 20,
        cidade: 'Blumenau'
    }

    ENUM:
    - ele é um conjunto de chave e valor

    enum cores {
        WHITE: '#FFF',
        BLACK: '#000'
    }
    - para chamarmos eles basta colocar 'cores.WHITE'

    ANY (não aconselhado, pois ele vai ignorar toda a tipagem daquele dado especificamente):
    let nome: any = 'Julio'

    VOID:
    - usa para tipar funções em que não damos um return
*/


/*
    INTERFACE:
    - ela é outra maneira de tipar dentro do Type

    Ex:
    
    interface pessoa {
        nome: string,
        idade: number,
        endereco: endereco
    }

    interface endereco {
        cidade: string,
        estado: string
    }

    let pessoa: pessoa = {
        nome: 'Julio',
        idade: 20, 
        endereco: {
            cidade: 'Blumenau',
            estado: 'SC'
        } 
    }
*/


/* 
    UNION & ALIASES:
    
    Union -> vai indicar que um determinado dado pode ser de um tipo ou de outro
    Ex:

    const pessoa: pessoa | ocupacao = {
        nome: 'Julio',
        idade: 20, 
        cidade: 'Blumenau',
    }  

    interface pessoa {
        nome: string,
        idade: number,
        cidade: string
    }

    interface ocupacao {
        trabalho: string,
        local: string
    }


    Aliases -> vai servir para unir dois tipos diferentes 
    Ex:

    type dados = ocupacao & pessoa

    const pessoa: dados = {
        nome: 'Julio',
        idade: 20, 
        cidade: 'Blumenau',
        trabalho: 'programador',
        local: 'remoto'
    }  

    interface pessoa {
        nome: string,
        idade: number,
        cidade: string
    }

    interface ocupacao {
        trabalho: string,
        local: string
    }


    -> Podemos fazer com que os dados sejam opicionais dentro do objeto, basta
    acrescentar um ponto de interrogação dentro da tipagem
    Ex:

    interface ocupacao {
        trabalho?: string,
        local?: string
    }
*/


