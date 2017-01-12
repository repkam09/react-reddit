var React = require('react');
var ReactDOM = require('react-dom');
var view = require('./views/main');

window.getreq = function (url) {
    return new Promise((resolve, reject) => {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", url, true);

        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status === 200) {
                    resolve(xmlhttp.responseText);
                } else {
                    reject(xmlhttp.status);
                }
            }
        }
        xmlhttp.send();
    });
}


require('./views/header');
require('./views/footer');
require('./views/content');

var app = React.createElement(view);
ReactDOM.render(app, document.getElementById('app'));