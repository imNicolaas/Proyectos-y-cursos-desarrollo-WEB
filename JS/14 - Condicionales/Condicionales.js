let edad = 17;

if(edad >17){
    console.log('mayor de edad')
}else{
    console.log('menor de edad')
}

if(edad >=18){
    console.log('mayor de edad')
}else{
    console.log('menor de edad')
}

let hora = 4;

if(hora >=0 && hora <=5){
    console.log('Dejame dormir')
}else if(hora >=6 && hora<=11){
    console.log('Buenos dias')
}else if(hora >=12 && hora<=18){
    console.log('Buenas tardes')
}else if(hora >=19 && hora<=23){
    console.log('Buenas noches')
}

//Simplificacion del if else, OPERADOR TERNARIO

let eresMayor = (edad>=18) ? 'mayor de edad': 'menor de edad'; 

console.log(eresMayor);

//Switch case

/*
domingo -0
lunes -1
martes -2
miércoles - 3
jueves - 4
viernes - 5
sábado - 6
*/
let dia = 2;

switch (dia) {
    case 0:
        console.log('Es domingo')    
    break;

    case 1:
        console.log('Es lunes')    
    break;

    case 2:
        console.log('Es miercoles')    
    break;

    case 3:
        console.log('Es jueves')    
    break;

    case 4:
        console.log('Es viernes')    
    break;

    case 6:
        console.log('Es sabado')    
    break;

    default: //si la variable en cuestion no cae en ningun caso
        console.log('No es un valor valido para dia')
    break;
}

switch (key) {
    case value:
        
        break;

    default:
        break;
}
