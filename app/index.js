// QUESTION 3 
// 3. Write a console app that reads a JSON document (you define
// the structure of this document) from a file and outputs the properties of
// the JavaScript object/object graph to the UI

const readJSON = require('./readJSON');

obj = readJSON.readJSON('app/resources/sample.json');

var http = require('http');

const PORT=8081;


function handleRequest(request, response){
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(obj));
    response.end();
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});