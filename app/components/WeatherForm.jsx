// presentational component
var React = require('react');
var WeatherForm = React.createClass({
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="location"></input>
          </div>
          <div>
            <button className="button expanded hollow">Get Weather</button>
          </div>
        </form>
      </div>
    );
  },
  onFormSubmit: function(e) {
    e.preventDefault();

    // input field value
    var location = this.refs.location.value;

    if(location.length > 0) {
      // clear the input
      this.refs.location.value = '';
      this.props.onSearch(location);
    }

  }
});

module.exports = WeatherForm;
