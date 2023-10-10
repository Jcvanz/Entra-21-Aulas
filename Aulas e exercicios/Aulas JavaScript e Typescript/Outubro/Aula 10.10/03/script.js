const metodoPrivado = Symbol('metodoPrivado');

class Exemplo {
    constructor() {
        this.propriedadePublica = 'valor público';
        this[metodoPrivado] = () => {
            console.log('Método privado');
        };
    }
    chamarMetodo() {
        this[metodoPrivado]();
    }
}

const obj = new Exemplo();
console.log(obj.propriedadePublica);
obj.chamarMetodo(); // isso funciona
obj[metodoPrivado](); // isso dará erro