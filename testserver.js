function randomString() {
    Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 9);
}

// functions
//

var http = require('http');
var url = require('url');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://localhost:27017";

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    const urlpath = q.path;
    res.write(urlpath);
    res.end();
    //
    //
}).listen(3000);