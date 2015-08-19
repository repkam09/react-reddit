var reddit = require('../testjson');

module.exports = {

	verbose: function (message) {
		console.log(message);
	},
	
	getPage : function (url) {
		return new Promise(function (resolve, reject) {
			resolve(reddit.nexus4);
		});
	}
	
};