/*
    ESTRUTURA DE REPETIÇÃO FOR OF

    - O For of é uma estrutura de repetição semelhante ao for,
    porém maais simples;
    - O número de repetição é baseado no array utilizado;
    - Podemos nos referir aos elementos sem precisas acessar o índice deles.

    Ex:

    const somaInfinta = (...args) => {
        let total =0

        for(num of args) {
            total += num
        }

        return total;
    }
*/

const somaInfinta = (...args) => {
    let total =0

    for(num of args) {
        total += num
    }

    return total;
}

console.log(somaInfinta(5, 5, 8, 7, 6, 9, 10));