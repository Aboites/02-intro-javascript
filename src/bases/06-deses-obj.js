
// Desestructuración (Asignación desestructurante)

const persona = {
    nombre: "Rodrigo",
    edad: 24,
    clave: "IronMan",
};

// const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ( { nombre, edad, rango = 'Capitan', clave } ) => {
    //console.log( nombre , edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 74.4262,
            lng: 12.3735
        }

    }
};

const { nombreClave, anios, latlng:{ lat, lng } } = useContext( persona );
console.log(nombreClave, anios); 
console.log(lat, lng);