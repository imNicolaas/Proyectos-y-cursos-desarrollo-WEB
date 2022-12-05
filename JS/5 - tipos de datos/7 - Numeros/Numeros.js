let a = 1;
let b = new Number(2);
let c = 6.4567;
let d = "2.3";

console.log(a, b, c);

console.log(c.toFixed(1));

console.log(parseInt(c)); //devuelve solo la parte entera de un número

console.log(typeof a, typeof b, typeof c, typeof d,);

console.log(a+d); //concatena el número a lo que vale el string y muestra todo como texto

//para hacer operaciones se puede hacer un casteo

console.log(a + parseInt(d)); // solo se sumara la parte entera pero hay un error, y sumara un 1 al final de número ademas de agregar muchos ceros

console.log(a + parseFloat(d)); //en este caso si se hace la suma de los decimales 

//todos estos metodos estan ligados a el constructor "Number", es decir que se podria hacer

console.log(a + Number.parseFloat(d));