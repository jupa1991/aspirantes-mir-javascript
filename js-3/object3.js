const receta = new Object()

receta.nombre = 'Sandwich'
receta.ingredientes = []

console.log(receta);

const elemento1 = {
    nombre: 'pan',
    cantidad: 2
}

const elemento2 = {
    nombre: 'queso',
    cantidad: 1
}

receta.ingredientes = [elemento1, elemento2]

console.log('\n', receta.ingredientes[0].nombre);

console.log('\n',receta);

const suma = receta.ingredientes[0].cantidad + receta.ingredientes[1].cantidad
console.log(suma);