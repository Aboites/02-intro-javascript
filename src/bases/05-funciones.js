
// Funciones en JS
//const saludar = function( nombre ) {
//    return `Hola, ${ nombre }` 
//}

const saludar2 = ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = ( ) => `Hola mundo`;

//console.log( saludar( 'Rodrigo' ) );

console.log( saludar2( 'Rodrigo' ) );
console.log( saludar3( 'Rodrigo' ) );
console.log( saludar4() );

const getUser = ( ) => {
    return {
        uid: 'ABCD1234',
        username: 'constrasena'
    };
}

/* Para "obviar" el return cuando se regresa un objeto se utiliza el parentesis.
const getUser = ( ) =>
    ({
        uid: 'ABCD1234',
        username: 'constrasena'
    });
*/

console.log( getUser() );

// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

function getUsuarioActivo ( nombre ) {
    return {
        uid: "ABC456",
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Rodrigo');
console.log( usuarioActivo );

// ------- SOLUCION ------------

const getUsuarioActivo2 = ( nombre ) => ({
    uid: "ROD123",
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2("Rodrigo Aboites");
console.log( usuarioActivo2 );