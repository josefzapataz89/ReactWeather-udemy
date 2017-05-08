var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2d7ac69360ecaf11361a96ac655fe70d&units=metric';

module.exports = {
  // My ApiKey react:2d7ac69360ecaf11361a96ac655fe70d
  getTemp(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
      .then( (response) => {
        if ( response.data.cod && response.data.message ) {
          throw new Error(response.data.message);
        } else {
          return response.data.main.temp;
        }
      }, (error) => {
        throw new Error(error.data.message);
      });
  }
}
