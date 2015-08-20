var reddit = require('../testjson');

module.exports = {

    verbose: function (message) {
        console.log(message);
    },

    getPage: function (url) {
        return new Promise(function (resolve, reject) {
            var url = 'https://www.reddit.com/r/aww/';

            $.ajax({
                type: 'GET',
                url: "https://repkam09.com/repserv/corsget/" + btoa(url),
                async: true,
                success: function (json) {
                    debugger;
                    resolve(json);
                },
                error: function (e) {
                    console.log(e.message);
                    reject(e);
                }
            });
        });
    }

};