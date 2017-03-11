// presentational component
var React = require('react');

var WeatherMessage = ({temp, location, country}) => {
  return (
    <div>
      <h3 className="text-center">It's {temp} degrees celsius in {location}, {country}.</h3>
    </div>
  )
};

module.exports = WeatherMessage;
