This is a basic url shortner which uses node.js, mongodb, and html, css, javascipt.

Make sure you have node.js and mongoDB
to use this program first download this. then run
```
npm i
```

make sure you have nodemon
```
npm i -g nodemon
```

then run both these commands in seperate command lines
```
npm run start
npm run startClient
```

then open localhost:8080 and enjoy :)

troubleshooting:
make sure the ports 8080 and 3000 are not already in use by another application
if you are chanding the mongoDB connect to mongoDB atlis please tanker with the delay in server.js near the end of the code
```
 setTimeout(function () {
            URLresultWWW = URLresultWWW.replace('[', '');
            URLresultWWW = URLresultWWW.replace(']', '');
            console.log("\x1b[34m%s\x1b[0m" ,"data-retrived: " + URLresultWWW);
            //URLresultWWW = JSON.parse(URLresultWWW);
            res.write(URLresultWWW);
            res.end();
        },30/* getRandomInt(25, 31)*/)
        **// change the 30 to someting higher and try to find the sweet spot**
        //console.log(resultURLD);
    }
}).listen(3000);
```
