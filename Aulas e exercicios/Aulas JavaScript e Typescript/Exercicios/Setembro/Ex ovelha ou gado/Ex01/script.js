/* 
    Um fazendeiro tem criação de ovelhas e gado.
    As ovelhas são negras, marrons e pretas.
    O gado é branco, malhado e marrom.
    Cada cabeça de gado custa R$5.000,00 e cada ovelha R$3.000,00.
    Desenvolva um script para contar as cabeças de gado e ovelhas e 
    no final gere um resumo do rebanho conforme abaixo:(desconsidere a formatação)

    Gado     Qtde      Vlr.Unitário      Vlr.Total
    Branco  99999        999.999,99   9.999.999,99
    Malhado 99999        999.999,99   9.999.999,99
    Marrom  99999        999.999,99   9.999.999,99

    Ovelha   Qtde      Vlr.Unitário      Vlr.Total
    Negras  99999        999.999,99   9.999.999,99
    Malhado 99999        999.999,99   9.999.999,99
    Pretas  99999        999.999,99   9.999.999,99
*/

// FORMA USANDO IF E ELSE

// variáveis
var ovMarrom = 0, ovNegras = 0, ovBranca = 0; 
var gaBranco = 0, gaMalhado = 0, gaPreto = 0;
var especie, cor;

// Inicio do laço de repetição. usamos o true para que ele entre no loop
while(true) { 
    // Prompt que pergunta a espécie
    especie = prompt(`Informe qual animal deseja adicionar:
    O - Ovelha
    G - Gado
    S - sair
    `).toUpperCase();

    // IF para sair do programa
    if(especie === 'S') {
        break;
    }

    // IF para separar ovelha e gado
    if(especie === 'O') {
        // Prompt que pergunta a cor
        cor = prompt(`Informe qual a cor da ovelha:
        M - Marrom 
        N - Negra
        B - Branca
        `).toUpperCase();
        // IF para as cores das ovelhas
        if (cor === 'M'){
            ovMarrom = parseInt(prompt('Qual a quantidade que deseja adicionar'));
        } else if (cor === 'N'){
            ovNegras = parseInt(prompt('Qual a quantidade que deseja adicionar'));
        } else if (cor === 'B'){
            ovBranca = parseInt(prompt('Qual a quantidade que deseja adicionar'));
        } else {
            alert ("Caracter não correspondente");
        }
    } else if (especie === 'G') {
        // Prompt que pergunta a cor
        cor = prompt("informe qual a cor da gado (B/M/P)").toUpperCase();
        // IF para as cores das ovelhas
        if(cor === 'B') {
            gaBranco = parseInt(prompt('Qual a quantidade que deseja adicionar'));
        } else if(cor === 'M'){
            gaMalhado = parseInt(prompt('Qual a quantidade que deseja adicionar'));
        } else if(cor ==='P'){
            gaPreto = parseInt(prompt('Qual a quantidade que deseja adicionar'));
        } else {
            alert ("Caracter não correspondente");
        }
    } else { 
        // ELSE para caso nõa for encontrado o caracter válido
        alert("Caracter não correspondente");
    }
}

document.write(`
    Gado    |     Qtde      |  Vlr.Unitário  |   Vlr.Total <br>
    -------  -------------  --------------  -------------------- <br> 
    Branco  |  ${gaBranco}  |  R$ 5.000,00   | ${(gaBranco * 5000).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}  <br>
    -------  -------------  --------------  -------------------- <br> 
    Malhado |  ${gaMalhado} |  R$ 5.000,00   | ${(gaMalhado * 5000).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} <br>
    -------  -------------  --------------  -------------------- <br> 
    Preto   |  ${gaPreto}   |  R$ 5.000,00   | ${(gaPreto * 5000).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}   <br>
    -------  -------------  --------------  -------------------- <br> 
    <br>
    <br>
    Ovelha  |    Qtde       |  Vlr.Unitário  |  Vlr.Total <br>
    -------  -------------  --------------  -------------------- <br> 
    Negras  |  ${ovNegras}  |  R$ 3.000,00   | ${(ovNegras * 3000).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}  <br>
    -------  -------------  --------------  -------------------- <br> 
    Marrom  |  ${ovMarrom}  |  R$ 3.000,00   | ${(ovMarrom * 3000).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}  <br>  
    -------  -------------  --------------  --------------------  <br> 
    Branca  |  ${ovBranca}  |  R$ 3.000,00   | ${(ovBranca * 3000).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}  <br>  
    -------  -------------  --------------  -------------------- <br> 
`)