/*
Exercise 1 
The Sum of a Range

function rangeOriginal(start, end){
	var array = [];
	for (start; start <= end; start++){
		array.push(start);
	}
	return array;
}

function sum(array){
	var total = 0;
	for (var i = 0; i < array.length; i++){
		total += array[i];
	}
	return total;
}

function range(start, end, step){
	var array = [];
	if (start < end){
		if (step == undefined)
			step = 1;
		for (start; start <= end; start += step)
			array.push(start);
	}
	else {
		if (step == undefined)
			step = -1;
		for (start; start >= end; start += step)
			array.push(start);
	}
	return array;
}


Exercise 2


function reverseArray(array){
	var newArray = [];
	for (var i = 0; i < array.length; i++)
		newArray.unshift(array[i]);
	return newArray;
}
function reverseArrayInPlace(array){
	var placeholder = null;
	for (var i = 0; i < (Math.floor(array.length / 2)); i++){
		placeholder = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = placeholder;
	}
	return array;
}
function reverseArrayInPlaceEasier(array){
	var copy = [];
	for (var i = 0; i < array.length; i++)
		copy.push(array[i]);
	for (var i = 0; i < array.length; i++)
		array[i] = copy[array.length - (i+1)];
	return array;
}

Exercise 3



function prepend(element,list){
	var newList = {value: element, rest: list};
	return newList;
}

// console.log(prepend(10, prepend(20, null)));
function arrayToList(array){
	var list = null;
	for (var i = (array.length - 1); i >= 0; i--){
		list = prepend(array[i],list);
	}
	return list;
}

//console.log(arrayToList([10, 20,30]));

function nthNonRecursive(list,number){
	position = list;
	for (var i = 0; i < number; i++){
		position = position["rest"];
	}
	return position["value"];
}

function nth(list,number){
	if (list == undefined)
		return undefined;
	else if (number == 0)
		return list["value"];
	else {
		return nth(list["rest"],number - 1);
	}
		
}

function listToArray(list){
	var array = [];
	for (var node = list; node; node = node.rest) {
		array.push(node.value);

	}
	return array;
}

I had a lot of trouble figuring out listToArray, because I
assumed nth needed to be used (since the instructions called it a
helper function) and I couldn't see how. Turned out it was 
unnecessary after all. I also couldn't figure out the syntax
of the for loop, although now that I see it it makes sense.


console.log(listToArray({value: 10, rest: {value: 20, rest: null}}));
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

Exercise 4


function deepEqual(one,two){
	if (one != null && two != null &&
	typeof one == "object" && typeof two == "object"){
		
		var propsInOne = 0, propsInTwo = 0;

		for (var i in one){
			propsInOne++;
			if (i in two) 
				return deepEqual(one[i],two[i]);
			else
				return false;
		}

		for (var i in two)
			propsInTwo++;
		
		return propsInOne == propsInTwo;	
	}

	else
		return one === two;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true

*/

var x = {"16": ["Alex", "Tim"]}
x["16"].push("Robert");
console.log(x+": "+x["16"]+"\n");







