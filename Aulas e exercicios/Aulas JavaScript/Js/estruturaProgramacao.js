/* 
    Salvar valores na mémoria:
    - Para salvarmos valores em memória, utilizamos variáveis;
    - Elas são como containers, que salvam informações para quando precisarmos utilizar;
    - Temos como declarar variáveis com LET, VAR e CONST;
    - Com VAR e LET podemos redeclarar valores, já com CONST isso é impossivel.

    Ex:
    const constante = 1;
    var variavel = 2;
    let variavel = 3; 

    Math:
    - É um objeto que possui diversas funções para fins matemáticos;
    - max: encontra o maior número // floor: arredonda para baixo o número // ceil: arredonda para cima.
    
    Ex:
    Max:
    console.log(Math.max(5, 2, 1, 10)) = ele irá retornar o maior número, no caso o 10;
        
    Floor:
    console.log(Math.floor(5.4)) = ele irá arrendodar para baixo, ficando 5;

    Ceil:
    console.log(Math.ceil(5.5)) = ele irá arrendodar para cima, ficando 6;


    IF e ELSE:
    
    EX:
    var m = 5;
    if(m >= 10){
        console.log('M é maior ou igual a 5');
    } else {
        console.log('M é menor que 5');
    }


    Estruturas de repetições:
    - Ele se repete até uma condição ser satisfeita;
    - Evita a repetição desnecessária do nosso código;
    - Algumas das estruturas são FOR e WHILE;
    - Tem que se atentar ao LOOP INFINITO.

    Ex:
    while:
    - Faz uma ação até que uma condição seja atingida;
    - No bloco definimos o fim do loop, que é a condição;
    - Temos que definir um incremento, que é quem faz a condição ser atingida.

    var p = 0;
    while(p < 5){
        console.log(`Repetindo ${p}`);
        // INCREMENTO
        p += 1;
    }


    DO e WHILE:
    - Também é uma estrutura de repetição;
    - A sintaxe é semelhante ao while.

    var doWhile = 10;
    do {
        //aqui dentro vai ficar o que será repetido
        console.log(`valor de ${doWhile}`);
        doWhile--
    } while(doWhile > 1)


    FOR:
    - É a estrutura de repetição mais usada;
    - Ela condensa toda lógica em uma linha;
    - Na própria declaração, colocamos: Incrementador, condição final e progresso.
    
    for (let f = 0; f < 20; f++) {
        console.log('repetindo');
    }


    Forçando a saída de um loop:
    - Com a instrução BREAK podemos ejetar um loop, fazendo com que as repetições cessem;
    - Isso pode poupar memória;
    - Não é tão comum, mas é um recurso válido.

    Ex: 
    for(let g = 20; g > 10; g--) {
        console.log(g);
        if(g === 14) {
            console.log('g = 14');
            break;
            // Com isso ele irá quebrar no 14.
        }
    }


    Pulando uma execução do loop:
    - O CONTINUE, pode pular uma ou mais execuções do loop;
    - Ele é semelhante ao break.

    Ex:
    for(let s = 0; s < 20; s++) {
        if(s % 2 === 0) {
            console.log(`par = ${s}`);
            continue
        }
        console.log(s);
    }


    SWItCH:
    - Pode ser utilizado para organização de um excesso de if/else;
    - Cada IF seria um CASE;
    - Para cara CASE temos que adicionar um BREAK;
    - Temos o DEFAULT que seria como o ELSE.

    Ex:
    const job = 'Advogado
    switch(job) {
        case 'Advogado': 
            console.log('Advogado'); 
        break;
        case 'Programador':
            console.log('Programador'); 
        break;
        case 'Engenheiro':
            console.log('Engenheiro'); 
        break;
        default:
            console.log('Profissão não encontrada');
        break; 
    }

*/
