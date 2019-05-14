// asi se define un objeto
var Nata = {

	nombre: 'Natan',
	apellido: 'Zigaran',
	edad: 22,
	dni: '39900726',
	instagram: 'eliasnziga',
	nick: 'SiMETRik'
}


// definimos una funcion para usar el objeto
function funcionwachoo(nombre) {

console.log(nombre.instagram.charAt(nombre.instagram.length-1).toUpperCase())

}

funcionwachoo(Nata)