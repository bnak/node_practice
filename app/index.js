// QUESTION 3 
// 3. Write a console app that reads a JSON document (you define
// the structure of this document) from a file and outputs the properties of
// the JavaScript object/object graph to the UI

const readJSON = require('./readJSON')

obj = readJSON.readJSON('./resources/sample.json');
console.log(obj);

//Lets require/import the HTTP module
var http = require('http');

//Lets define a port we want to listen to
const PORT=8080;

//We need a function which handles requests and send response
function handleRequest(request, response){
    response.setHeader('Content-Type', 'application/json');
    response.write(JSON.stringify(obj));
    response.end()
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});