let objetoA = {
    propiedad1: 'valor1',
}

const objetoB = new Object();

const Nicolas = {
    nombre: 'Nicolas',
    apellido: 'Corredor',
    edad: '20',
    pasatiempos: ['escuchar musica', 2, 3, 4],
    soltero: true,
    contacto: {
        email: 'nicolascorredor74@gmail.com',
        email2: 'nicolas.corredorm@ecci.edu.co'
    },//los objetos pueden tener como propiedad otros objetos
    saludar: function (){console.log('Hello world')}, //funciones

    decirNombre: function (){
        console.log(`La propiedad nombre es ${this.nombre}`); //para hacer uso de las propiedades del objeto en el que se esta, o en el scope del objeto en si
    }

}

console.log(Nicolas.nombre, Nicolas.apellido, Nicolas.saludar);

Nicolas.saludar(); //forma correcta de invocar un metodo

console.log(Nicolas['contacto']);

console.log(Nicolas.pasatiempos[3]);

console.log(Nicolas.contacto.email2);

Nicolas.decirNombre();


//metodos del objeto Objeto (objeto Object) (se les dice metodos por que cada uno de ellos es una funcion dentro del OBJETO que se este trabajando)

console.log(Object.keys(Nicolas)) //se le llama el METODO keys ya que este es una FUNCION dentro del OBJETO Object.
console.log(Object.values(Nicolas)) //imprime solo los valores de las llaves o propiedades

console.log(Nicolas.hasOwnProperty('contacto')); //evalua de forma Booleana si este tiene o no la propiedad que se le indique



var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
