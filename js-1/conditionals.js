const prompt = require("prompt-sync")({sigint:true});

const numeroP = prompt("Ingrese un numero: ")

function calcularColor(numero) {
    const numeroI = parseInt(numero)

    switch (numeroI) {
        case 1:
            console.log("El color es negro");
            break;
        case 2:
            console.log("El color es blanco");
            break;
        case 3:
            console.log("El color es azul");
            break;
        default: console.log("El color es verde");
            break;
    }
}

calcularColor(numeroP)