var http = require('http');
var fs = require('fs');
var url = require('url');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    //console.log(q.pathname);
    if (q.pathname == "/favicon.ico") {
        // log it's favicon
        return;
    }
    if (q.pathname == "/") {
        fs.readFile("index.html", function (err, data) {
            if (err) throw err;
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.write(data);
            return res.end();
        });
    }
    else{
        efs = true;
        var returnedVal;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                returnedVal = this.responseText;
                //console.log(returnedVal);
            }
        };
        xhttp.open("GET", "http://localhost:3000/?" + q.pathname.substring(1), true);
        xhttp.send();
        setTimeout(function () {
            returnedVal = JSON.parse(returnedVal);
            res.writeHead(301, {
                Location: returnedVal.OGurl
            });
            res.end();
        }, 70);
    }
    //res.end();
}).listen(8080);