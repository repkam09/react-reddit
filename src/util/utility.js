module.exports = {

    verbose: function (message) {
        console.log(message);
    },

    getPage: function (url) {
        return new Promise(function (resolve, reject) {
            var url = 'https://www.reddit.com/r/aww/.json?limit=2';

            var request = $.ajax({
                type: 'GET',
                url: url,
                async: true
            });

            request.done(function (response) {
				resolve(JSON.parse(response));
			});

			request.fail(function (jqXHR, textStatus) {
				reject(textStatus);
			});
        });
    }
};