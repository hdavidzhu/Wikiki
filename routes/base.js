/**
* Routes for our server
* Handles querying our mongo database
* Also handles making authenticated github requests
*/

var Repos = require('../models/repo');
var github = require('./github');
var error = require('./callbacks').error;

exports.getRateLimit = function(req, res) {
    github.getRateLimit(function (err, response, body){
        if (err) {
            error(res, err, "Could not fork Github");
            return;
        }
        res.json(
            // Send back our current rate limit.
            JSON.parse(response.body).rate
        );
    })
}

exports.index = function(req, res) {
    res.render('index');
};

exports.allRepos = function(req, res) {
    Repos.find().sort({owner: 1, name: 1})
    .exec(function(err, data) {
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
        if (url.indexOf(".com") > -1) {
            error(res, null, "Not a Github Url");
            return;
        }
    } else {
        url = url.substring(index + 11, url.length);
    }

    var parts = url.split("/");
    if (parts.length !== 2) {
        error(res, null, "Invalid Url Pattern");
        return;
    }

    parts[1] = parts[1].replace(".git", "");

    // Validate Github API
    github.validateREPO(parts[0], parts[1], function (err, response, body) {
        if (err || response.statusCode/10 !== 20) {
            error(res, err, "Invalid Github Url");
            return;
        }
        Repos({
            name: parts[1],
            owner: parts[0]
        }).save(function(err, data) {
            if (err) {
                error(res, err, "Could not save Github Repo");
                return;
            }

            github.forkRepo(parts[0], parts[1], function (err, response, body) {
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

exports.pushContent = function(req, res) {
    github.pushContent("olinwikihub", req.body.repo, req.body, function (){
        res.status(200).json({
            success: true
        })
    });
}

exports.githubRedirect = function(req, res) {
    // Catch all local Github links.
    res.redirect("/");
}