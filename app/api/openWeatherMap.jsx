var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=78001ab37bca94918586e644f7ffa690&units=metric';
const COUNTRY_CODES_URL = 'https://restcountries.eu/rest/v1/alpha?codes=';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    // ES 6 template literal
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
          var otherRequestUrl = `${COUNTRY_CODES_URL}${res.data.sys.country}`;
          return axios.get(otherRequestUrl).then(function(ress){
            var country = ress.data.length > 0 ? ress.data[0].name : res.data.sys.country;
            return {temp: res.data.main.temp, location: res.data.name, country: country};
          }, function(ress){
            throw new Error(ress);
          });


      }
    }, function(res){
      throw new Error(res.data.message);
    });

  }
}
