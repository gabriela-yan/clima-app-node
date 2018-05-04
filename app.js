const place = require('./place/place');

const weather = require('./weather/weather');

const argv = require('./config/yargs').argv;

let getInfo = async(direccion) => {
    try {

        let coord = await place.getPlaceLatLng(direccion);
        let temp = await weather.getWeather(coord.lat, coord.lng);

        return `El clima en ${coord.direccion} es de ${temp} grados Celcius`

    } catch (e) {
        return `No se puede determinar el clima en ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(msj => console.log(msj))
    .catch(e => console.log(e));