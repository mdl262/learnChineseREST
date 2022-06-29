const express = require('express'),
    app = express(),
    //bodyParser = require('body-parser'),
    //fs = require('fs'),
    url = require('url'),
    port = process.env.PORT || 4000,
    https = require('https');

var translate = require('google-translate-api-x');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }))

/*const routes = require('./routes/routes.js')(app, fs);*/

//let url = new URL(req.protocal + "://" + req.get('host') + req.originalUrl);
//const url = new URL("https://url.com")

app.get('/',async function (req, res) {
    this_url = url.parse(req.url, true);
    console.log({"this_url":this_url});

    query = this_url.query.query || ""
    console.log({"query":query})

    result = fetchResult(query)
    result = await translate(query, { from: 'zh-CN', to: 'en' });
    res.send(result)
});

async function fetchResult(query) {
    const response = await translate(query, { from: 'zh-CN', to: 'en' });
    console.log(response);
    return response;
}

app.listen(port, () => {
    console.log('Server started on: ' + port);
});



