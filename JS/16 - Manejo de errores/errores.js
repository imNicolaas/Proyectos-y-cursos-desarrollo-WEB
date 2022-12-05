try {
    console.log("Se grega el codigo a evaluar")
    a = a +1;
    console.log("Segundo mensaje en el try")
} catch (error) {
    console.log('Captura cualquier error surgido en el try')
    console.log("error: " + error)
} finally{
    console.log("lo que este en el bloque finally siempre se va a ejecutar al final de un bloque try-catch")

}//pero este error es un error cualquiera de sitaxis de js

//mientras que el try catch se usa mas para crear nuestros propieos mensajes de error, cuando por ejemplo esperamos o necesitamos un tipo de dato en especifico y se nos otorga otro, podremos lanzar mensajes de error personalizados.

try {
    let numero = 2;

    if(isNaN(numero)/*Funcino que devuelve true si el valor introducido no es número*/){
        throw new Error("no se introdujo un número")
    }
    
    console.log(numero * 5)
} catch (error) {
    console.log(`Se produjo un error ${error}`)
}