/*let numero = 1 //declaro variable y asigno valor 1
let palabra = 'hola'

const cienCmEnMetros = 1
console.log(numero)
let nombre = prompt("ingrese su nombre");
let edad = prompt("ingrese su edad")
alert("su nombre es " + nombre + " su edad es " + edad);
for (let i = 0; i < 100; i++) 
    console.log(i);
*/
/* let nombre = '' 
while (nombre != 'esc') {
let temporal = prompt('ingrese un valor para concatenar')
    if(temporal=='esc') break
    nombre+=temporal;
    alert(nombre)

  }
  
let numero = prompt('ingrese su edad');

for (let i = 0; i < numero; i++) {
    console.log('hola')
}
*/

let edad = prompt('ingrese su edad ')
let sumatoriaDeEdades = 0
let contador = 0 
while (edad != 'esc'){
sumatoriaDeEdades += parseInt(edad)
contador++
edad = prompt('ingrese su edad')
}
const promedio = sumatoriaDeEdades / contador
alert('la sumatoria fue ' + sumatoriaDeEdades)
alert('el promedio de edades es de ' + promedio)
if(promedio % 2 ===0){
    alert('el promedio de edades es un numero par')
} else{
    alert('el promedio de edades es un numero impar')
}
