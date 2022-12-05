let a = 2
var b = 3

console.log(window.a)
console.log(window.b)

//declaracion con var
var global = 'global';
console.log('variable antes del bloque: ', global);

    {
        var global = 'bloque';
        console.log('variable dentro del bloque: ', global);
    }

console.log('variable después del bloque: ', global);

//declaracion con let
console.log("con let: ");

let global2 = 'global';
console.log('variable antes del bloque: ', global2);

    {
        let global2 = 'bloque';
        console.log('variable dentro del bloque: ', global2);
    }

console.log('variable después del bloque: ', global2);


