const pedro = {
    nombre: 'Pedro Perez',
    edad: 30,
    activo: true,
    hobbies: ['programar', 'squash', 'piano']
}

console.log(pedro.edad);

pedro.estatura = 1.8
console.log(pedro);

delete pedro.activo
console.log(pedro);

Object.entries(pedro).forEach(entry => {
    const [key, value] = entry;
    console.log(key, ': ', value);
  });

  function saluda(greetings) {
    console.log('Hola, me llamo ', greetings.nombre);
  }

  saluda(pedro)