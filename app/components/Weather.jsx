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
        isLoading: false
      });
    }, function(err) {
      that.setState({
        isLoading: false
      });
      alert(err);
    });
  },
  render: function() {
    // ES6 destructuring syntax
    var {isLoading, temp, location, country} = this.state;

    function renderMessage() {
        if(isLoading) {
            return <h3>Fetching weather...</h3>;
        } else if (temp && location) {
            return <WeatherMessage temp={temp} location={location} country={country}/>
        }
    }

    return (
      <div>
      <h3>Get Weather</h3>
      <WeatherForm onSearch={this.handleSearch}/>
      {renderMessage()}
      </div>
    );
  }
});
module.exports = Weather;
