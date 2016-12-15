var React = require('react');
var log = require('../util/utility');

var PageItem = React.createClass({

    getInitialState: function () {
        return { showcontent: false };
    },

	/**
	 * componentDidMount - function is called when a component is
	 * mounted into the DOM.
	 */
    componentDidMount: function () {
        log.verbose('PageItem.jsx - componentDidMount');
        if (this.props.obj.domain.indexOf("i.imgur.com") > -1) {
            // This is a post to an imgur link
            console.log("This post is an imgur link. " + this.props.obj.domain);
            this.setState({ showcontent: true });
        } else {
            console.log("This post is not an imgur link. " + this.props.obj.domain);
            this.setState({ showcontent: false });
        }
    },

	/**
	 * componentWillUnmount - function is called when a component is
	 * about to be unmounted from the DOM.
	 */
    componentWillUnmount: function () {
        log.verbose('PageItem.jsx - componentWillUnmount');
    },

    expandText: function (event) {
        if (this.props.obj.domain.indexOf("i.imgur.com") > -1) {
            // This is a post to an imgur link
            console.log("This post is an imgur link. " + this.props.obj.domain);
            this.setState({ showcontent: true });
        } else {
            console.log("This post is not an imgur link. " + this.props.obj.domain);
            this.setState({ showcontent: false });
        }
    },

	/**
	 * This function is written in JSX syntax to provide an HTML-like
	 * view of the react component
	 */
    render: function () {
        log.verbose('PageItem.jsx - render() ');
        var data = this.props.obj;

        var timestring = null;
        var datestring = null;

        if (data.created_utc) {
            var dateobj = new Date(data.created_utc * 1000);
            datestring = dateobj.toDateString();
            timestring = dateobj.toTimeString();
        }

        var content = null;
        if (this.state.showcontent) {
            // Handle the URL rewrite to repkam09 api
            var parts = data.url.split("/");
            var imgid = parts[parts.length - 1];
            var id = imgid.split(".")[0];

            var url = "https://api.repkam09.com/api/imgur/" + id;

            content = (
                <img src={url} height="300" />
            );
        }

        return (
            <div className="reddit-post">
                <div className="post-content">
                    <h3 id={data.id} onClick={this.expandText}> {data.title} </h3>
                    <p id={data.id}> {data.url} </p>
                    {content}
                    <p>Posted {datestring} at {timestring} by {data.author} in /r/{data.subreddit}</p>
                </div>
            </div>
        );
    }
});

module.exports = PageItem;


/*
 <h3 id={this.state.id} onClick={this.expandText}> {this.state.title} </h3>
<p id={this.state.id}> {this.state.url} </p>
Posted {datestring} at {timestring} by {this.state.author} at  in {this.state.subreddit}

*/