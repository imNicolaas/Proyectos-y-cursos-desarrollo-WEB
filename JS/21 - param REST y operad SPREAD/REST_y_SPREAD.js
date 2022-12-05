function sumar (a, b, ...c){
    resultado = a+b;

        c.forEach(function(el){//se toma a c como un arreglo con todos los demas valores que se van a introducir con la sintaxis REST
            resultado += el
        });

    return resultado;
}

console.log(sumar(2,2,   1,1,1))

//Spread operator: Cuando se tenga una expresion con parametros establecidos y se quiera crear otro en el que se quieran agregar todos los valoes de alguno que ya ser tenga creado, el SPREAD se puede usar en estos casos

const arr1 = [1,2,3,4,5], arr2 = ['a', 'b', 'c', 'd', 'e']

console.log(arr1, arr2);//se tienen dos arreglos de 5 posiciones 

//si se quiere crear un arreglo que sea la mezcla de los dos que se tienen se podria intentar
const arr3 = [arr1, arr2];//pero asi se tiene un arrelgo de dos posiciones y con dos arreglos de 5 pos cada una.
console.log(arr3)
//pero con el Operados SPREAD o de propagacion se pueden juntar los dos arreglos con sus elementos
const arr4 = [...arr1, ...arr2];
console.log(arr4)

const asd = [1,2,3, ...arr2]

console.log(asd)

//Operador SPREAD en objetos

const a = {
    a: 'a',
    _1: '1'
}

const b ={
    
    b: 'b',
    ...a,
    _2: 2
}

console.log(a, b)

