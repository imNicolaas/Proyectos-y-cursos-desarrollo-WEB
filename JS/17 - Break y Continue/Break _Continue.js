const nums = [1,2,3,4,5,6,7,8,9,10];

for(let i =0; i<nums.length; i++){

    if(i === 6){
        break;
    }//rompe el loop si se cumple la condición.

    console.log(nums[i]);
}

//el continue aparta o rompe la iteriacion en la que se invoque, es decir hace que la repeticion en la se active, no se tenga en cuenta en el ciclo.
console.log('continue')

for(let i =0; i<nums.length; i++){

    if(i === 6){//empezando desde el cero hasta el 6 hay 7 posiciones, septima posicion
        continue;
    }//Se salta esta repeticion del loop en especifico, y continua normalmente.

    console.log(nums[i]);
}

console.log('imprimir números pares')

for(let i =0; i<nums.length; i++){

    if(i % 2 ===0){
        continue;
    }

    console.log(nums[i]);
}