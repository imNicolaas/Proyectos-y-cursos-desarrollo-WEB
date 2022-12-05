//Funciones declaradas



function funcion_1 (){
    console.log("1");
    console.log("2");
    console.log("3");
}

//Invocacion de funciones

funcion_1();
console.log("")
console.log("________________________")


//retorno de parametros

function retorno (){
    console.log("uno")
    return "Esta funcion retorna valor String";

    console.log("dos") //El compilador del navegador solo ejecuta las linea de codigo que haya dentro de una funcion hasta el primer return lo que haya despues no lo ejecutará
    console.log("tres")
}

let valor_fun_retorno = retorno(); //Se asigna la funcion a una variable

console.log(valor_fun_retorno); //para ver el retorno

//Funciones recibiendo parametros
console.log("")
console.log("________________________")

function saludar(nombre = "Desconocido", edad = 0) { console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`)}; //se pueden dar valores iniciales a los parametros de una funcion, y estos se ejecutaran con la funcion siempre y cuando la funcion no se invoque con unos parametros iniciales establecidos manualmente.

saludar("Nicolas", 20); //invocacion de funcion con parametros iniciales establecidos manualmente
saludar(); //invocacion con parametros iniciales no establecidos (actuan los parametros por defecto establecidos en la funcion).

//si no se tienen parametros preestablecidos y ademas no se les otorga ningún valor tomaran el valor de undefined.


//FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS

funcionDeclarada(); //si se invoca la funcion antes de ser creada igual va a funcionar, ya que por la misma razon que el ambito de las variables no existe con var, Js ordena el codigo por variables y después funciones por lo tanto si funcionara

function funcionDeclarada() {
    console.log("Esto es un función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
}

funcionDeclarada();

//Funcion anonima, no tiene nombre por que ya usa el de la constante
//se declara como constante por que la constante siempre va a apuntar al cuerpo de la funcion por lo tanto si se puede al ser un tipo de dato compuesto.
//funcionExpresada();
const funcionExpresada = function (){
    console.log('Esto es una funcion expresada, es decir una funcion que se le ha asignado como valor a una variable o constante, si se invoca antes de su creacion js nos dirá que no es posible invocarla antes de su inicializacion')
}

funcionExpresada();









console.log("")
console.log("________________________")
//Funciones con valores iniciales e invocaiones de las mismas
function a (a, b) {
    console.log(a + b);
}

a(3, 2);

//asignacion de funciones como valor de una variable, y ejecucion de esta variable

let b = funcion_1();
b;

//minuto 17:30 - funciones expresadas


