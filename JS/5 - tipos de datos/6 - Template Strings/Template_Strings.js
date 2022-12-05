let nombre = "Nicolas"
let apellido = "Corredor"

//Concatenación
let saludo = "Hola mi nombre es " + nombre + " " + apellido + '.';
console.log(saludo);

//Da error 
// let ul ="
// <ul>
// <li>Primavera</li>
// <li>Verano</li>
// <li>Otoño</li>
// <li>Invierno</li>
// </ul>"

let saludo2 = `Hola mi nombre es ${nombre} ${apellido}`;
console.log(saludo2);


//no da error
let ul2 =`
<ul>
<li>Primavera</li>
<li>Verano</li>
<li>Otoño</li>
<li>Invierno</li>
</ul>`

console.log(ul2);