let nombre = 'Nicolas',
     edad = 21
     
const persona = {
    nombre: nombre,
    edad: edad,
    saludar: function(){
        console.log('Hola mundo !');
    }
}

console.log(persona)

persona.saludar()

//Objetos literalres

const individuo = {
    nombre, //cuando la propiedad y la varible que se quieren asignar comparten el nombre se vinculan las dos explicitamente
    edad,
    sayHi (){
        console.log('Hello World !!')
    }
}

console.log(individuo)

individuo.sayHi(); 