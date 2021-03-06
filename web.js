var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    response.send(fs.readFileSync('index.html').toString());
    // fs.readFileSync('index.html').toString()
    // response.send('TEST');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});