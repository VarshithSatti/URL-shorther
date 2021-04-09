function randomString() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 9);
}

/*
function checkfav(input) {
    if(input.OGurl !== "/favicon.ico") {
        return input;
    }
    else {
        return;
    }
}*/

// functions
//

var http = require('http');
var url = require('url');
var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = "mongodb://localhost:27017/";

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (q.pathname == "/favicon.ico") {
        // log it's favicon
        return;
    }

    //
    //
    if (q.pathname !== "/") {
        var randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 6);;
        MongoClient.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("URL-shortner");
            var myobj = {
                OGurl: q.pathname.substring(1),
                SHORTNER: randomString
            };
            dbo.collection("URL_storage").insertOne(myobj, function (err, res) {
                if (err) throw err;
                console.log("\x1b[32m%s\x1b[0m", "The Url: " + q.pathname.substring(1) + ". the short form: " + randomString + "data has been stored :)");
                db.close();
            });
        });
        res.write(randomString);
        res.end();
    } else {
        var URLresultWWW;
        MongoClient.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("URL-shortner");
            var query = {
                SHORTNER: q.search.substring(1)
            };
            //console.log(q.search.substring(1));
            dbo.collection("URL_storage").find(query).toArray(function (err, result) {
                if (err) throw err;
                URLresultWWW = JSON.stringify(result);
                //console.log(result);
                //console.log(URLresultWWW);
                //console.log(result);
                db.close();
            });
        });
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min); 
        }
        setTimeout(function () {
            URLresultWWW = URLresultWWW.replace('[', '');
            URLresultWWW = URLresultWWW.replace(']', '');
            console.log("\x1b[34m%s\x1b[0m" ,"data-retrived: " + URLresultWWW);
            //URLresultWWW = JSON.parse(URLresultWWW);
            res.write(URLresultWWW);
            res.end();
        },30/* getRandomInt(25, 31)*/)

        //console.log(resultURLD);
    }
}).listen(3000);