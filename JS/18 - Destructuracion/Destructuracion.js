const numeros = [1, 2, 3];

//Sin destructuración
let uno = numeros[0],
dos = numeros[1],
tres = numeros[2];

console.log(uno, dos, tres);

//Destructuracion: forma de separar cada uno de los valores de un arreglo o objeto para asignarlos a variables independientes que pueden ser definidas por const o let

const [one, two, three, cuatro] = numeros;

//one = 2; no se puede porque todas las nuevas variables estan definidas como constantes 

console.log(one, two, three, cuatro)

let [a, b, c] = numeros;

a = 10; // en este caso si deja por que todas las variables definidad por destructuracion son definidas con let por lo tanto no son constantes

console.log(a, b, c);

//destructuracion con objetos

let persona = {
    nombre: 'Nicolas',
    apellido: 'Corredor',
    edad: '21'
};

//para que la destructuracion en los objetos funcione, la neuva variable que se cree dentro de la sintaxis de destructuracion se llame igual que en el objeto.

let {nombre, apellido, edad} = persona;

console.log(nombre, apellido, edad);

//forma de renombrar las variables en destructuracion con objetos

let {nombre: nom, apellido: ape, edad: age} = persona;

console.log(nom, ape, age)
