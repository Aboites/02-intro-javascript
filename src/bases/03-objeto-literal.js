

const persona = {
    nombre: 'Rodrigo',
    apellido: 'Aboites',
    edad: 24,
    direccion: {
        ciudad: "CDMX",
        zip: 16034,
        lat: 14.73533,
        lng: 32.34522,
    }
};

// Copia la referencia, no crea un objeto con los mismos datos
// const persona2 = persona

const persona2 = { ...persona };    // Crea un objeto identico, NO LA REFERENCIA
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);