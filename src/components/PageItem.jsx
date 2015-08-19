var React = require('react');
var log = require('../util/utility');

var PageItem = React.createClass({
	
	
	getInitialState: function() {
        return {url: "undefined", author: "undefined", title: "undefined", subreddit: "undefined", time: "undefined", id: "undefined"};
    },
	
	/**
	 * componentDidMount - function is called when a component is
	 * mounted into the DOM.
	 */
    componentDidMount: function() {
		var data = this.props.obj.data; 
		
		var postUrl = data.url;
		var postAuthor = data.author;
		var postTitle = data.title;
		var postId = data.id;
		var postTime = data.created;
		var postSub = data.subreddit;
		
		// log.verbose('PageItem.jsx - componentDidMount ' + postId);
		this.setState({ url: postUrl, author: postAuthor, title: postTitle, subreddit: postSub, time: postTime, id: postId });      
    },
	
	/**
	 * componentWillUnmount - function is called when a component is
	 * about to be unmounted from the DOM.
	 */
    componentWillUnmount: function() {
        log.verbose('PageItem.jsx - componentWillUnmount');
    },
	
	expandText: function(event) {
		log.verbose("got click on " + event.currentTarget.id);
	},
	
	/**
	 * This function is written in JSX syntax to provide an HTML-like
	 * view of the react component
	 */
    render: function() {
        log.verbose('PageItem.jsx - render() ');
		
        return (
            <div className="redditPost">
				<h3 id={this.state.id} onClick={this.expandText}> {this.state.title} </h3>
				<p id={this.state.id}> {this.state.url} </p>
				By {this.state.author} at {this.state.time} in {this.state.subreddit}
			</div>
    	);
    }
});

module.exports = PageItem;