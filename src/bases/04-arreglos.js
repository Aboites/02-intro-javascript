
// Arreglos dentro de JS

// Utilizar esta forma solo cuando se sepa la cantidad de espacios necesarios
// const arreglo = new Array();

const arreglo = [1,2,3,4];

// No se recomienda usarlo porque modifica al objeto principal. USAR '...'
// arreglo.push(1);

let arreglo2 = [...arreglo, 5];

// Valores retornados de una funcion los mete a un arreglo nuevo.
// Mete cada uno de los valores del arreglo a la funcion
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2
});

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
