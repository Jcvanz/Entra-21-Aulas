/* 
    JSON:
    
    - Na maioria das vezes, vamos precisar converter objetos para JSON;
    - Ou um JSON para um objeto javascript válido;
    - Utilizamos o objeto JSON e os métodos stringify e parse;

    Ex:

    // ex de JSON 
    const myJson = '{"name": "julio", "age": 20}';
    
    // JSON para Objeto
    const myObject = JSON.parse(myJson)

    // Para add propriedades dentro do JSON
    myObject.job = 'programador' 

    // Objeto para JSON
    const myNewJson = JSON.stringify(myObject)
*/