var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Error'

    };
  },
  // both must be strings, title is optional, message is required
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    var {title, message} = this.props;
    var modalMarkup =  (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    // show the modal as soon as this component mounts
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {

    return (
      <div></div>
    )

  }
});

module.exports = ErrorModal;
