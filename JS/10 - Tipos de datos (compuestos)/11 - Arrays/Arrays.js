const a = [1, true, "a", [1, 2, 3, '4']];

console.log(a);
console.log(a.length);

//imprimir un indice en especifico
console.log(a[3]);

//Imprimir un elemento en especifico de un arreglo que esta dentro de otro arreglo
console.log(a[3][0]);

//forma  de definir un arreglo con el constructor Array
const b = Array.of('a', "b", 'c', 'd');

//Crear un arreglo con n posiciones y llenarlas con el valor que queramos
const c = Array(20).fill('c');
console.log(c);

//forma en des uso de definir un arreglo 
const e = new Array();

//algunos metodos de arreglos
const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro"); //Agrega un elemento siempre al final
console.log(colores);

colores.pop(); //elimina el ultimo elemento
console.log(colores);

//metodo para agregar funcionalidades a cada elemento de un arreglo
a.forEach(function(el, index){
console.log(`<li id ="${index}">${el}</li>`)
});//poner cada elemento de un arreglo dentro de un li de html y agregarle un id unico

