var fs = require('fs');

function readJSON(){

	console.log("ReadJSON function")

	content = fs.readFileSync("./resources/sample.json");
	var obj = JSON.parse(content);
//	fs.readFile('./resources/sample.json', 'utf8', function (err, data) {
//	    if (err) throw err; // we'll not consider error handling for now
//	    obj = JSON.parse(data);
//	});

	return obj;
}

module.exports.readJSON = readJSON 