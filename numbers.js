var precioPanKg = 35.51231233

var cantidadPanKg = 3

// El Math.round lo que hace es redondear, el toFixed arregla a (n) decimales
var costoPan = Math.round(cantidadPanKg * precioPanKg).toFixed(2)

// el toFixed devuelve un string, para transformar a 'number' se utiliza la funcion parseFloat
var costoPan1 = parseFloat(costoPan)