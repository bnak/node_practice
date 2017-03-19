var fs = require('fs');


//synchronous
function readJSON(filePath){

	console.log("ReadJSON function")

	content = fs.readFileSync(filePath);
	var obj = JSON.parse(content);

	return obj;
}

module.exports.readJSON = readJSON 