var Repos = require('../models/repo');
var github = require('../github');
var error = require('./callbacks').error;


exports.index = function(req, res) {
    res.render('index');
};


exports.allRepos = function(req, res) {
    Repos.find({}, function(err, data) {
        if (err) {
            error(res, err, "Failed to load repos");
            return;
        }
        res.json({
            "repos": data
        });
    });
};

exports.addRepo = function(req, res) {
    // Check Github for URL and get Rep name and owner name
    var url = req.body.url;

    // Error Checking
    var index = url.indexOf("github.com/");
    if (index === -1) {
        error(res, null, "Not a Github Url");
        return;
    }

    var parts = url.substring(index, url.length).split("/");
    if (parts.length !== 3) {
        error(res, null, "Invalid Url Pattern");
        return;
    }

    // Validate Github API
    github.validateREPO(parts[1], parts[2], function (err, response, body) {
        if (err || response.statusCode/10 !== 20) {
            error(res, err, "Invalid Github Url");
            return;
        }
        Repos({
            name: parts[2],
            owner: parts[1]
        }).save(function(err, data) {
            if (err) {
                error(res, err, "Could not save Github Repo");
                return;
            }

            github.forkRepo(parts[1], parts[2], function (err, response, body) {
                if (err) {
                    error(res, err, "Could not fork Github");
                    return;
                }

                res.status(200).json({
                    success: true
                });
            });
        });
    });
}