module.exports = {

    verbose: function (message) {
        console.log(message);
    },

    getPage: function (url) {
        return new Promise(function (resolve, reject) {
            var url = 'https://www.reddit.com/r/aww/.json';

            var request = $.ajax({
                type: 'GET',
                url: "https://repkam09.com/repserv/corsget/" + btoa(url),
                async: true
            });

            request.done(function (response) {
                var json = JSON.parse(atob(response));		
				resolve(json);
			});

			request.fail(function (jqXHR, textStatus) {
				reject(textStatus);
			});
        });
    }
};