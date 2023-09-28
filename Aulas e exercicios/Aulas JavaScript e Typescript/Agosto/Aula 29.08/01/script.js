// Array

const nome = ['João', 'Maria', 'José'];
const idade = ['18', '17', '16'];
const passou = [true, false, false];

document.write(`Aluno: ${nome[0]} <br> Idade: ${idade[0]} <br> Passou de ano: ${passou[0]}`);


/* 
    vetor de números 
    - add: contador paa adicionar ao vetor;
    - ord:
    - aux: 





*/
var vetorNumeros
var add = 0, ord = 0, aux = 0;

for(let add = 0; add < 7; add++) {
    vetorNumeros[add] = prompt('Digite um número');
}

for (let add = 0; add < 7; add++) {
    for(let ord = add + 1; ord < 7; ord++) {
        if(vetorNumeros[add] > vetorNumeros[ord]) {
            aux = vetorNumeros[add];
            vetorNumeros[add] = vetorNumeros[ord];
            vetorNumeros[ord] = aux;
        }
    }
}