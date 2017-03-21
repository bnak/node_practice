// QUESTION 4
//4. Provide an http app that serves up a page that includes javascript that outputs the mouse coordinates
//when clicked to the browser console.

var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile(__dirname  + "/" + "index.html" );
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://localhost:%s",  port)
})