const pi = 3.14159;

console.log("constante pi = ", pi);

//definiendo valores de datos compuestos con let
let objeto = {
    nombre: 'Nicolas C',
    edad: '20'
};

let arreglo = ["a", "b", 'c'];

objeto.correo = 'nicolascorredor74@gmail.com';

arreglo.push("D");

console.log('objeto modificado con let: ', objeto);

console.log('arreglo modificado con let: ', arreglo)

//definiendo valores de datos compuestos con cons
const objeto2 = {
    nombre: 'Nicolas Corredor',
    edad: '20 años'
};

const arreglo2 = ["1", "2", '3'];

objeto2.correo = 'nicolascorredor74@gmail.com';

arreglo2.push("4");

console.log('objeto 2 modificado con let: ', objeto2);

console.log('arreglo 2 modificado con let: ', arreglo2);