//EJERCICIO 1

const concatenar = require('./modulos/string')

console.log(concatenar("hola" , " soy agus"))

//EJERCICIO 2

const matematica = require('./modulos/matematica')


console.log(matematica.sumar(2,1))
console.log(matematica.restar(4,2))
console.log(matematica.multiplicar(5,5))
console.log(matematica.dividir(20,10))

// EJERCICIO 3
const Alumno = require('./modulos/alumno');

const alum1 = new Alumno("Agus", "48385003")
const alum2 = new Alumno("Agus2", "48385004")

console.log(alum1);
console.log(alum2)

//EJERCICIO 4

const copia = require('./modulos/Ejercicio4');

copia('./chau.txt', './hola.txt')

//EJERCICIO 5

const parsearUrl = require('./modulos/parse'); 
let objeto = parsearUrl("https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2219601/tp4-modulos-con-node")
console.log(objeto)