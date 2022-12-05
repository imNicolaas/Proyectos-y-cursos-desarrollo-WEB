//Aritmeticos: + - * / %. ------------------------------------------------------------------

let a = 5+ 5 -10 * 3;
let b = 5+ (5-10)*3;
console.log(a, b);

let modulo = 6 % 5;

console.log(modulo)

//Relacionales >, <, >=. <=, ==, ===, !=, !== -----------------------------------------------

console.log(1>2);

// =, significa asignacion 
let aa;

aa = 2;

//==, comparacion de solo los valores
console.log(7 == 7);
console.log("7" == 7); //true por que compara solo los valores
console.log(0 == false); //true por que los dos son valores que tienden a falso, 8 - booleans
//actualmente usar dos iguales se considera una mala practica

//===, compara el valor y el tipo de dato, se considera buena practica
console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);


//incremento o decremento--------------------------------------------------------------------

let i =1

i /= 3;
console.log(i)

//Operador unario
console.log("Operador unario")

let o = 6

o++;
o--;
++o;
--o;

console.log(o++);

let t = 2;
console.log(t++); //primero imprime la variable como esta y despues le suma uno
 console.log(++t); //despues de la suma anterior le vuelve a sumar uno y la imprime al final

 //Operaciones logicos-----------------------------------------------------------------------

 // ! - not: niega, es decir lo que es verdadero lo vuelve falso y viceversa
 console.log(true)
 console.log(!true)

 console.log(false)
 console.log(!false)

 // || - or: con dos condiciones, si una de ellas O la otra es verdadera, el or se cumple

 console.log((9===9) || ("1"===1)); // true por que se cumple una o la otra
 console.log((9===9) || (1===1));

 // && - and: se necesita que todas las condiciones evaluadas sean verdadareas para que se cumpla

 console.log((9===9) && ("1"===1));
 console.log((9===9) && (1===1));
