// CLASE 17 - ARRAYS

var natan = {
	nombre: 'Natan',
	apellido: 'Zigaran',
	edad: 22,
	altura: 1.74
}

var lucas = {
	nombre: 'Lucas',
	apellido: 'Zigaran',
	edad: 17,
	altura: 1.70 
}

var rauli = {
	nombre: 'Raul',
	apellido: 'Zigaran',
	edad: 29,
	altura: 1.68
}

var esther = {
	nombre: 'Esther',
	apellido: 'Suarez',
	edad: 55,
	altura: 1.60
}

var raul = {
	nombre: 'Raul',
	apellido: 'Zigaran',
	edad: 58,
	altura: 1.73 
}

var ciro = {
	nombre: 'Ciro',
	apellido: 'Zigaran',
	edad: 5,
	altura: 0.70
}

var pocho = {
	nombre: 'Pocho',
	apellido: 'Zigaran',
	edad: 2,
	altura: 0.60 
}

var fliaZigaran = [natan, lucas, rauli, esther, raul, ciro, pocho]

for (var i=0; i < fliaZigaran.length; i++ ) {
 console.log(`${fliaZigaran[i].nombre} mide ${fliaZigaran[i].altura}m.`)
}



// CLASE 18 - FILTRAR UN ARRAY - ARRAY.FILTER DEVUELVE OTRO ARRAY CUMPLIENDO LA CONDICION (en este caso 'esAlta')

var esAlta = ({altura}) => altura >= 1.70
var personasAltas = fliaZigaran.filter(esAlta)

for (var i = 0; i < personasAltas.length; i++) {
	console.log(`${personasAltas[i].nombre} es alto y tiene ${personasAltas[i].altura}mts`)
}


// CLASE 21 - TRANSFORMAR UN ARRAY - ARRAY.MAP TRANSFORMA TODOS LOS ELEMENTOS DE ESE ARRAY CON LA FUNCION QUE LE COLOQUEMOS COMO PARÁMETRO

//   const pasarAcm = (persona) => {
//		return {
//			...persona,
//				altura: persona.altura * 100
//				}
//		}

// ABAJO ESTÁ MEJOR ESCRITO
const pasarAcm = (persona) => {
	return {
	...persona,
		altura: persona.altura * 100
			}
}

var fliaZigaranEnCm = fliaZigaran.map(pasarAcm)




// CLASE 22 - REDUCIR UN ARRAY - REDUCE