var letra = prompt('Informe uma letra');

if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
    document.write(`A letra ${letra} é uma vogal`);
} else {
    document.write(`A letra ${letra} é uma consoante`);
}