/**
* Contains helper methods for making HTTP requests to our server
* server - calls that require Github authentication (token)
* github - calls that do not require authentication
*/

var server = {
    GET : function(url, data, callback) {
        $.get(url, data).done(function(data) {
            callback(data);
        }).error(this.errorHandler);
    },
    POST : function(url, data, callback, uniqueError) {
        $.post(url, data).done(function (result) {
            callback(result);
        }).error(function () {
            return uniqueError ? uniqueError : this.errorHandler;
        }());
    },
    errorHandler : function(err, status) {
        console.log(status + " " + err);
    }
}

var API = "https://api.github.com/";
var headers = {
    headers: {
          "User-Agent": 'olinwikihub'
    }
};

var github = {
    README: function (name, callback) {
        this.GET("repos/olinwikihub/" + name + "/readme",
            null,
            function (data) {
                callback({
                    content: Base64.decode(data["content"]),
                    sha: data["sha"]
                });
            });
    },

    GET: function (path, data, success) {
        $.ajax({
          url: API + path,
          data: data,
          success: success,
        });
    },
}