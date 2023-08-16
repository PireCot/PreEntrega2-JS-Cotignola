class Estudiante {
    constructor(nombre, nota){
        this.nombre = nombre
        this.nota = nota
    }
} 

let nombre = prompt('Bienvenido estudiante, ingrese su nombre - Para salir ingrese el texto "esc"')
let nota = prompt('ingrese su nota')
let estudiantes = []

while (nombre != 'esc'){
    estudiantes.push(new Estudiante(nombre,nota))
    nombre = prompt('Bienvenido estudiante, ingrese su nombre - Para salir ingrese el texto "esc"')
    nota = prompt('ingrese su nota')
}

const aprobados = estudiantes.filter((estudiante)=>(estudiante.nota>=6))
const desaprobados = estudiantes.filter((estudiante)=>(estudiante.nota<6))
alert(`Teniendo en cuenta que se aprueba a partir de 6, aprobaron ${aprobados.map((estudiante)=>estudiante.nombre).join(', ')} y desaprobaron ${desaprobados.map((estudiante)=>estudiante.nombre).join(', ')} ` )