
// Algo largo
// const getImagePromise = () => {
//     const promesa = new Promise ( ( resolve, reject ) => {
//         resolve('https://njckdnejd.com')
//     })

//     return promesa;
// }


// Mas simplificado
//const getImagePromise = () => 
//      new Promise( resolve => resolve('https://dhjdddd.com'))



// Aun mas simplificado
const getImage = async() => {

    try {
        const apiKey = '4cfFavLLqMBgnS0j3LNJIh2sfCXXzY7w';
        const httpCall = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await httpCall.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        // Manejo del error
    }
}

getImage()
