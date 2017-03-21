// 2. Write a console app that generates 10 random integers and then output
// those same arguments in order from lowest to highest.



//High and low are inclusive
function generateNRandomIntegers (low, high, n) {  
  var numbers = new Array(n);
	for (var i = 0; i < numbers.length; i++) {
	    numbers[i] = Math.floor(Math.random() * (high - low + 1) + low);
	};
	return numbers;
};

//Adapt to default sort method which sorts elements alphabetically.
function sortNumberArray(numArray) {
    return numArray.sort(function (a, b) {  return a - b;  });
};

function orderRandom10IntegerArray(){

	const unsortedArray = generateNRandomIntegers(0, 10000, 10);
	console.log(`Ten random integers between 0 and 10000 : ${unsortedArray}`);
	const result = sortNumberArray(unsortedArray);
	console.log(`Sorted array: ${result}`);
};


module.exports.generateNRandomIntegers = generateNRandomIntegers;
module.exports.sortNumberArray = sortNumberArray;
module.exports.orderRandom10IntegerArray = orderRandom10IntegerArray;