import { getHeroById } from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject)  => {

//     setTimeout(() => {
//         // Tarea: importar getHeroById

//         const heroe = getHeroById(5);
//         resolve( heroe ); 
//         //reject( 'No se pudo encontrar' );
//     }, 2000 );

// });

// promesa.then( ( heroe ) => {
//     console.log('Heroe ', heroe)
// })
// .catch( err => console.warn( err ));

const getHeroByIdAsync = ( id ) => {

    return new Promise( (resolve, reject)  => {

        setTimeout(() => {
    
            const heroe = getHeroById( id );
            if (heroe) {
                resolve (heroe);
            } else {
                reject( 'Heroe inexistente' );
            }
        }, 2000 );
    
    });
}

getHeroByIdAsync(1)
    .then( console.log )
    .catch( console.warn );