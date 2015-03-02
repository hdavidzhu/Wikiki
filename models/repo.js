/**
* Mongo Model for a Repo
* Keeps track of what repos have been added.
* this can be replaced with a GET replace to the Github Account
*/

var mongoose = require('mongoose');

var repo_schema = mongoose.Schema({
      name: String
    , owner: String
});

module.exports = mongoose.model("Repo", repo_schema);