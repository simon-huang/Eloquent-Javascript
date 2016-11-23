/*
Exercise 1


function min(a,b) {
	if (a < b)
		return a;
	else
		return b;
}

Exercise 2


function isEven(number){
	if (number == 0)
		return true;
	else if (number == 1)
		return false;
	else if (number < 0)
		return isEven(-number);
	else 
		return isEven(number - 2);
}

Exercise 3



function countBsOriginal(str){
	var counter = 0;
	for (var n = 0; n < str.length; n++){
		if (str.charAt(n) == "B")
			counter++;
	}
	return counter;
}

function countChar(str,char){
	var counter = 0;
	for (var n = 0; n < str.length; n++){
		if (str.charAt(n) == char)
			counter++;
	}
	return counter;
}

function countBsImproved(str){
	return countChar(str, "B");
}

*/

var x = {value: 10, rest: {value: 20, rest: null}}
//

console.log(x[0]);
