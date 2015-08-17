var React = require('react');
var view = require('./views/main');

var app = React.createElement(view);
React.render(app, document.getElementById('app'));