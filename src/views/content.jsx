var React = require('react');
var log = require('../util/utility');

var PageItem = require('../components/PageItem');

var ContentView = React.createClass({

	getInitialState: function () {
		return { posts: [] };
	},

	/**
	 * componentDidMount - function is called when a component is
	 * mounted into the DOM.
	 */
	componentDidMount: function () {
		log.verbose('content.jsx - componentDidMount');

		var self = this;
		log.getPage().then(function (result) {
			var results = JSON.parse(result);
			self.setState({ posts: results.data.children });
		});
	},

	/**
	 * componentWillUnmount - function is called when a component is
	 * about to be unmounted from the DOM.
	 */
	componentWillUnmount: function () {
		log.verbose('content.jsx - componentWillUnmount');
	},


	/**
	 * This function is written in JSX syntax to provide an HTML-like
	 * view of the react component
	 */
	render: function () {

		var content = this.state.posts.map(function (post) {
			var postKey = post.data.created + "" + post.data.id;
			return (
				<PageItem obj={post.data} key={postKey} />
			);
		});


		log.verbose('content.jsx - render() ');

		return (
			<div>
				{content}
			</div>
		);
	}
});

module.exports = ContentView;