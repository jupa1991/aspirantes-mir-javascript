const prompt = require("prompt-sync")({sigint:true}); 

function hola(texto) {
    console.log(`Hola ${texto}!`);
}

const phrase = prompt("Ingresa tu nombre: ")
console.log(hola(phrase))