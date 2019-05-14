var natan = {
	nombre: 'Natan',
	apellido: 'Zigaran',
	edad: 22,
	peso: 65,
	ingeniero: true,
	politico: false,
	chef: false,
	pianista: true,
	deportista: true
}

var lucas = {
	nombre: 'Lucas',
	apellido: 'Zigaran',
	edad: 17,
	peso: 55
}

var sabrina = {
	nombre: 'Sabrina',
	apellido: 'Montiel',
	edad: 21,
	peso: 52
}


function imprimirnombre({edad,nombre}){
	console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

imprimirnombre(lucas)



// CLASE 10
function sumar(persona) {
	persona.edad += 1
}



// Función que como parametro recibe un objeto y crea un objeto nuevo con mismas cualidades pudiendo agregar nuevas
function newObject(objetoparametro,ape) {
	return {
		...objetoparametro,
		apellido: ape,
	}
}
// Para hacer uso de esta funcion en consola colocar 'var nuevobjeto = newObject(persona1,'Suárez')




// CLASE 11 - CONDICIONALES
function imprimirProfesiones(x) {
	console.log(`${x.nombre} de edad ${x.edad} años, es:`)
	if (x.ingeniero) {
		console.log('Ingeniero')
	} else{console.log('No es Ingeniero')}

	if (x.politico) {
		console.log('Politico')
	} else {console.log('No es Politico')}

	if (x.chef){
		console.log('Chef')
	} else {console.log('No es Chef')}

	if (x.pianista) {
		console.log('Pianista')
	} else {console.log('No es Pianista')}

	if (x.deportista) {
		console.log('Deportista')
	} else {console.log('No es Deportista')}
}

imprimirProfesiones(natan)

function imprimirSiEsMayorDeEdad({nombre, edad}) {
	console.log(`${nombre} es ${edad >= 18? 'mayor':'menor'} de edad`)
}




// CLASE 12 - FUNCIONES QUE RETORNAN VALORES

const MAYORIA_DE_EDAD = 18

const esMayor = ({edad}) => edad >= MAYORIA_DE_EDAD

function imprimimePorfavor(persona) {
	if (esMayor(persona)) {
		console.log('Es mayor de edad')
	} else {console.log('Es menor de edad')}
 }

 function permitirAcceso(persona) {
 	if (!esMayor(persona)) {
 		console.log('ACCESO DENEGADO')
 	} else {console.log('ACCESO GARANTIZADO')}
 }

 const esMenor = ({edad}) => !esMayor({edad}) 
 ? console.log('ACCESS DENIED') : console.log('ACCESS GRANTED')



 // CLASE 13 - ESTRUCTURAS REPETITIVAS: FOR

 const DIAS_DEL_ANO = 365
 const DIFERENCIA_PESO = 0.200
 const incrementarPeso = persona => persona.peso += DIFERENCIA_PESO
 const decrementarPeso = persona => persona.peso -= DIFERENCIA_PESO

 for (var i = 1; i <= DIAS_DEL_ANO; i++ ) {
 	var random = Math.random()

 	if (random < 0.25) {
 		incrementarPeso(natan)
 	} else if (random < 0.50) {
 		decrementarPeso(natan)
 	}
 }

 console.log(`Al final del año ${natan.nombre} pesa ${natan.peso.toFixed(1)} kg`)



// CLASE 14 - ESTRUCTURAS REPETITIVAS: WHILE

const META = natan.peso - 3
const HACE_DEPORTE = () => Math.random() <= 0.3
const COME_MUCHO = () => Math.random() <= 0.2
var dias = 0


while (natan.peso > META) {
	if (HACE_DEPORTE()) {
		decrementarPeso(natan)
	} else if (COME_MUCHO()) {
		incrementarPeso(natan)
	}
 	dias += 1
	}

	console.log(`${natan.nombre} ha tardado ${dias} dias en bajar 3 kg`)




// CLASE 15 - ESTRUCTURAS REPETITIVAS: DO - WHILE
var respuesta = null

do {
respuesta = prompt('Porfavor ingrese su nombre')
} while(
	respuesta === (null || '')
)
console.log(`El nombre que ingresó es ${respuesta}`)




// CLASE 16 - ESTRUCTURA CONDICIONAL: SWITCH

var ingreso = prompt('Escriba que dia es hoy')


switch (ingreso.toLowerCase()) {
	case 'lunes': alert('Hoy el día va a estar soleado')
	break
	case 'martes': alert('Hoy va a llover')
	break
	case 'miercoles': alert('Hoy ganás la loteria')
	break
	case 'jueves': alert('Hoy te vas a lastimar el dedo chiquito del pie')
	break
	case 'viernes': alert('Hoy aprobás el examen')
	break
	case 'sabado': alert('Hoy te toca cocinar')
	break
	case 'domingo': alert('Hoy es tu dia de descanso')
	break
	default: alert('No ingresaste un día válido')
	break
} 








