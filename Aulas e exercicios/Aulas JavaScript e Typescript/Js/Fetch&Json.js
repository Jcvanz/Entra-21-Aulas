/*
    FETCH:
    - Ele é um método que retorna a resolução de uma promisse,
    permitindo que façamos requisições HTTP.
    - Podemos usar o THEN e o CATCH para interagirmos com a resposta 
    da requisição.

    Ex:
    O front end irá disparar uma requisição através do fetch, o fetch
    irá retornar uma promisse, basicamente vai fazer uma requisição HTTP,
    a requisição HTTP irá bater no back end e o back end quando receber esses
    valores, irá armazenar no banco de dados, assim adc um novo usuário.

    VERBOS HTTP:
    get - quando o client solicita algum dado.
    post - quando queremos enviar algum dado a partir do client.
    delete - quando queremos deletar algum dado espcífico.
    path - serve para alterarmos um dado mais abrangente.
    put - quando quisermos alterar algum dado específico.
    
    CRUD -> create read update delete

    - Para estabelecermos a comuniucação do front para o back por meio do fetch
    usamos um ENDPOINT, que nada mais é do que uma URL

    - Existe 4 tipos de prarâmetros em uma requisição HTTP:
    -> Route params
    -> Query params
    -> Body params
    -> Header params
*/

// BODY PARAMS & HEADERS PARAMS
fetch('https://api.coingecko.com/api/v3/exchange_rates', {
    mode:'cors',
    method: 'POST',
    // usando BODY PARAMS
    body: {
        name: 'Julio',
        age: 20
    }, 
    // usando HEADERS PARAMS
    headers: {

    }
}).then((data) => {
    console.log(data);
})

// ROUTE PARAMS -> na URL, acrescenta / e escreve o que desejar. O ENDPOINT precisa estar esperando esse dado
fetch('https://api.coingecko.com/api/v3/exchange_rates/39258109', {
    mode:'cors',
    method: 'POST'
}).then((data) => {
    console.log(data);
})

// QUERY PARAMS -> na URL, acrescenta ? e escreve o que desejar, se for mais coisas acrescenta o &. O ENDPOINT precisa estar esperando esse dado
fetch('https://api.coingecko.com/api/v3/exchange_rates?id=39128409&name=Julio', {
    mode:'cors',
    method: 'POST'
}).then((data) => {
    console.log(data);
})

/*
    STATUS DE REQUISIÇÃO:
    -> sucesso = 200 a 299
    -> redirecionamento = 300 a 399
    -> Erro no client = 400 a 499
    -> Erro do servidor = 500 a 599
*/

/* 
    JSON - Javascript Object Notation
    -> é um formato de organização de dados
    -> a diferença do JSON pro objeto normal do javascript é que a chave do objeto
    deve ser em formato de string
    -> é comum o JSON ser usado como extensão para arquivos também, normalmente 
    de configurações

    Ex:
    const json = {
        "name": "Julio",
        "age": 20
    }

    Também podemos fazer em formato de string:
    const json = '{"name": "Julio", "age": 20}'


    Métodos para usar no JSON:
    JSON.parse() -> vai transformar uma string em formato de JSON em um objeto javascript
    
    Ex:
    Temos um JSON em formato de string:
        const obj = '{"name": "Julio", "age": 20}'
        console.log(JSON.parse(obj))
    Podemos usar o parse para transformar ele em um objeto 


    JSON.stringfy() -> vai fazer o caminho inverso, vai pegar um objeto javascript e vai 
    tranformar em uma string em formato de JSON

    Ex:
    Temos um objeto normal:
        const obj = {name: "Julio", age: 20}
        console.log(JSON.stringfy(obj))
    Podemos usar o parse para transformar ele em um objeto
*/