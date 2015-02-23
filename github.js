var request = require('request');
var https = require('https');
var secret = process.env.TOKEN || require('./secrets').TOKEN;
request.debug = true;

var API = "https://api.github.com/";
var headers = {
    headers: {
          "User-Agent": 'olinwikihub'
        , "Authorization": secret
    }
};

// GET /repos/:owner/:repo
exports.validateREPO = function(user, repo, callback) {
    request.get(API + "repos/" + user + "/" + repo, headers, callback);
};

// POST /repos/:owner/:repo/forks
exports.forkRepo = function(user, repo, callback) {
    request.post(API + "repos/" + user + "/" + repo + "/forks", headers, callback);
};

// // DELETE /repos/:owner/:repo
exports.deleteRepo = function(user, repo, callback) {
    request.del(API + "repos/olinwikihub/" + repo, headers, callback);
};