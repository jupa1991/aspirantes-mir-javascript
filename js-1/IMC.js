const prompt = require("prompt-sync")({sigint:true});

const peso = prompt("Ingrese su peso: ")
const altura = prompt("Ingrese su altura: ")

function calculoIndiceMasaCorporal(peso, altura) {
    const pesoI = parseInt(peso)
    const alturaI = parseInt(altura)
    const resultado = pesoI / alturaI^2
    console.log(`Su IMC es: ${resultado}`)

}

calculoIndiceMasaCorporal(peso, altura)