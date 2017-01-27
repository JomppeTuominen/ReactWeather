// container component, maintains state
var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    var that = this;
    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then(function(obj) {
      that.setState({
        location: obj.location,
        temp: obj.temp,
        country: obj.country,
        isLoading: false,
        error: false
      });
    }, function(err) {
      that.setState({
        isLoading: false,
        error: true
      });
      console.error(err);
    });
  },
  render: function() {
    // ES6 destructuring syntax
    var {isLoading, temp, location, country, error} = this.state;

    function renderMessage() {
      if(isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location && !error) {
        return <WeatherMessage temp={temp} location={location} country={country}/>
      } else if(error){
        return <h3>Couldn't find city with that name ;(</h3>
      }
    }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});
module.exports = Weather;
