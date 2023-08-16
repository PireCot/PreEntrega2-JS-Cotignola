
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
