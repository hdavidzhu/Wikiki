/**
* Github Authenticated API
* Contains the endpoints and API requests for authenticated github
*/

var request = require('request');
var https = require('https');
var secret = process.env.TOKEN || require('../secrets').TOKEN;
request.debug = true;

var API = "https://api.github.com/";
var headers = {
    headers: {
          "User-Agent": 'olinwikihub'
        , "Authorization": secret
    }
};

exports.getRepoContent = function (repo, callback) {
    request.get(API + "repos/OlinWikiHub/" + repo, headers, callback);
}

// GET /repos/:owner/:repo
exports.validateREPO = function(user, repo, callback) {
    request.get(API + "repos/" + user + "/" + repo, headers, callback);
};

// POST /repos/:owner/:repo/forks
exports.forkRepo = function(user, repo, callback) {
    request.post(API + "repos/" + user + "/" + repo + "/forks", headers, callback);
};

// DELETE /repos/:owner/:repo
exports.deleteRepo = function(user, repo, callback) {
    request.del(API + "repos/olinwikihub/" + repo, headers, callback);
};

// PUT /repos/:owner/:repo/contents/:path
exports.pushContent = function(owner, repo, contents, callback) {
    // contents["headers"] = headers["headers"];
    var newContents = {
        headers: headers["headers"],
        json: contents
    }
	request.put(API + "repos/" + owner + "/" + repo + "/contents/" + contents["path"], newContents, callback);
}

// GET /rate_limit
exports.getRateLimit = function(callback) {
	request.get(API + "rate_limit", headers, callback);
}