const axios = require('axios');

const getWeather = async(lat, lng) => {
    //axios
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9ccdd99dabed5cda6385f249692f7fb6`)

    let temp = resp.data.main.temp;
    return temp;
}

module.exports = {
    getWeather
}