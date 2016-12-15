module.exports = {

    verbose: function (message) {
        console.log(message);
    },

    getPage: function (url) {
        var url = 'https://api.repkam09.com/api/reddit/posts/EarthPorn';
        return getreq(url);
    }
};