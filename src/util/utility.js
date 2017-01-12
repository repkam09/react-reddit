module.exports = {

    verbose: function (message) {
        console.log(message);
    },

    getPage: function (url) {
        return getreq(url);
    }
};