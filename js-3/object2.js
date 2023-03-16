const persona = {
    nombre: 'Juan Pablo Adarve',
    edad: 31, 
    ciudad: 'Envigado',
    profesion: 'Disenador'
}

console.log(persona);

function presentacion(presentar) {
    let mensaje = ''
    delete presentar.profesion
    Object.values(presentar).forEach(val => {
        mensaje = mensaje + val + ', '
    });
    return mensaje
}

const mensaje = presentacion(persona)

console.log(mensaje);

persona.hobbies = ['dibujar', 'caminar', 'leer']

console.log(persona.hobbies);

const ciclo = [persona]
ciclo.forEach(element => {
    for (let i = 0; i < element.hobbies.length; i++) {
        console.log(element.hobbies[i]);        
    }
});