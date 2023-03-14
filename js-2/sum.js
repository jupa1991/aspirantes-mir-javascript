const prompt = require("prompt-sync")({sigint:true});

const cantNum = prompt('Ingrense la cantidad de numero que requiere: ')
const cantidad = parseInt(cantNum)
const arrayCant = new Array(cantidad)

console.log(arrayCant.length);

function llenarVector(arrayU) {
    for (let index = 0; index < arrayU.length; index++) {
        let cantNum = prompt('Ingrense numero: ')
        let cantidad = parseInt(cantNum)
        arrayU[index] = cantidad
    }
}

llenarVector(arrayCant)

function suma(array) {
    let contador = 0
    for (let index = 0; index < array.length; index++) {
        contador = contador + array[index]        
    }
    console.log('El suma de los numeros ingresados es: ', contador);
}

suma(arrayCant)

function numMax(array) {
    let max = array[0]
    for (let index = 0; index < array.length; index++) {
        if (max <= array[index + 1]) {
            max = array[index + 1] 
        }
    }
    console.log('El numero mayor es: ', max);
}

numMax(arrayCant)

function posMax(array) {
    let max = array[0]
    let pos = 0

    if (array.length > 0) {
        for (let index = 0; index < array.length; index++) {
            if (max <= array[index + 1]) {
                max = array[index + 1]
                pos = index + 1
            }
        }
        console.log('El indice del mayor es: ', pos);
        console.log('La posicion del mayor es: ', pos + 1) //para usuarios   
    }else {
        console.log('-1');
    }
}

posMax(arrayCant)

function orden(array) {
    let cadena = ''

    if (array.length > 0) {
        for (let index = 0; index < array.length; index++) {            
            cadena = cadena + array[index] + " " 
        }
        console.log(cadena)  
    }else {
        console.log(' ');
    }
}

orden(arrayCant)