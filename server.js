const express = require('express'),
    app = express(),
    url = require('url'),
    port = process.env.PORT || 4000,
    cors = require('cors')
    https = require('https');

var translate = require('google-translate-api-x');

app.use(
    cors({
        origin: "*",
    })
)

app.get('/',async function (req, res) {
    this_url = url.parse(req.url, true);
    console.log({"this_url":this_url});

    query = this_url.query.query || ""
    console.log({"query":query})

    result = await translate(query, { from: 'zh-CN', to: 'en' });
    res.send(result)
});

app.listen(port, () => {
    console.log('Server started on: ' + port);
});



