const prompt = require("prompt-sync")({sigint:true});

let bandera = true
while (bandera == true) {
    var numeroUsu = prompt("Ingrese numero positivo: ")
    if (numeroUsu < 0) {
        console.log('Error, el numero debe ser positivo');
    } else {
        bandera = false
    }
}

function suma(numero) {
    const numeroI = parseInt(numero)
    let sumaTotal = 0

    for (let index = 0; index <= numeroI; index++) {
        sumaTotal = sumaTotal + index                        
    }

    console.log(`El resultado es: ${sumaTotal}`);

}

suma(numeroUsu)
