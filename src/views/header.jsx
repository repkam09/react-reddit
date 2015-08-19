var React = require('react');
var log = require('../util/utility');

var HeaderView = React.createClass({
	
	/**
	 * componentDidMount - function is called when a component is
	 * mounted into the DOM.
	 */
    componentDidMount: function() {
        log.verbose('header.jsx - componentDidMount');
    },
	
	/**
	 * componentWillUnmount - function is called when a component is
	 * about to be unmounted from the DOM.
	 */
    componentWillUnmount: function() {
        log.verbose('header.jsx - componentWillUnmount');
    },
    
	
	/**
	 * This function is written in JSX syntax to provide an HTML-like
	 * view of the react component
	 */
    render: function() {
        log.verbose('header.jsx - render() ');
		
        return (
            <div>
            	Header!
			</div>
    	);
    }
});


module.exports = HeaderView;