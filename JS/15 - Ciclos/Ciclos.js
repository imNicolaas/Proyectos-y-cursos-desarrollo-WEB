let contador = 0;

while (contador < 10) {
    console.log("while "+contador); contador++;
}

do {
    console.log("do while " + contador);
    contador++;
} while (contador < 10);

for (let index = 0; index < 10; index++) {
    console.log('el indice vale: ' + index)
}

//FOR IN: Es un for que itera o "recorre" sobre todas las propiedades enumerables de un objeto que está codificado por cadenas, solo para objetos primitivos

const objeto1 = {
    nombre: "Nicolas",
    apellido: "Corredor",
    edad: 20
}

for (const propiedad in objeto1) {
    console.log(`propiedad ${propiedad} - value${propiedad[propiedad]}`)
}

//FOR OF: Es un for que itera o "recorre" sobre todas las propiedades enumerables de cualquier elemento de cualquier objeto que se puede iterar en js, como arreglos o incluso cadenas de texto etc.

const nums = [2, 4, 6, 8, 10];

for (const elemento of nums) {
    console.log(elemento);
}

let texto = 'Hola mundo';

for (const caracter of texto) {
    console.log(caracter);
}