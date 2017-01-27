var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
    <h1 className="text-center">About</h1>
    <p>This is a weather application build on React. I've built this for the Complete React Web App Developer Course.</p>
    <p>Here are some of the tools I used: </p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
      </li>
      <li>
        <a href="http://openweathermap.org/">OpenWeatherMap.org</a> - API used to search for weather data by city name.
      </li>
      <li>
        <a href="https://restcountries.eu">REST Countries</a> - API used to search the country name by the country code. 
      </li>
      <li>
        <a href="https://github.com/JomppeTuominen/ReactWeather">My GitHub</a>
      </li>
    </ul>
    </div>
  )
};

module.exports = About;
