//Se puede hacer la petición con request pero con axios trabajamos en base a promesas y apoyarnos de async-await para optimizar código
const axios = require('axios');

//Optimizar con ES7
const getPlaceLatLng = async(direccion) => {
    //Escapar a la forma HTML
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCGhbmZg7LPeOmrf08KQKE0NBlmiJqikQ8`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la dirección ${direccion}`);
    }
    let location = resp.data.results[0];
    let coord = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coord.lat,
        lng: coord.lng
    }
}

/*let encodedUrl = encodeURI(direccion);
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCGhbmZg7LPeOmrf08KQKE0NBlmiJqikQ8`)
        .then(resp => {

            let location = resp.data.results[0];
            let coord = location.geometry.location;
            //Se puede obtener todos los objetos como en POSTMAN con JSON.stringify
            //console.log(resp.data);
            //console.log(resp.status);
            //JSON.stringify(Mandamos el objeto, un replacer, y el espaciado)
            //console.log(JSON.stringify(resp.data, undefined, 2));
            console.log('Dirección:', location.formatted_address);
            console.log('lat:', coord.lat);
            console.log('lng:', coord.lng);
        })
        .catch(e => console.log('ERROR!!!', e)); 
*/
module.exports = {
    getPlaceLatLng
}