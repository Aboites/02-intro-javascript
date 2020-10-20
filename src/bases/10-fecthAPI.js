
const apiKey = '4cfFavLLqMBgnS0j3LNJIh2sfCXXzY7w';

const httpCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// httpCall.then( resp => {
//     resp.json().then( data => {
//         console.log( data );
//     }) 
// })
// .catch(console.warn);


httpCall.then( resp => resp.json() )
        .then( ({ data }) => {
            const { url } = data.images.original;

            const img = document.createElement('img');
            img.src = url;

            document.body.append(img);
        })
        .catch(console.warn);