/*
var number = 0

while (number <= 12) {
	console.log(number);
	number += 2;
}


var result = 1, counter = 0;
while (counter < 10) {
	result *= 2;
	counter += 1;
}
console.log(result);



var result = 1;
for (var counter = 0; counter < 10; counter += 1) {
	result *= 2;
}
console.log(result);



for (var current = 20; ; current++){
	if (current % 7 == 0)
		break;
}
console.log(current);

Exercise 1

for (var line = "#"; line.length <= 7; line += "#"){
	console.log(line);
}

Exercise 2 initial 

for (var counter = 1; counter <= 100; counter++){
	if ((counter % 3 == 0) && (counter % 5 == 0))
		console.log("FizzBuzz");
	else if (counter % 3 == 0)
		console.log("Fizz");
	else if (counter % 5 == 0)
		console.log("Buzz");
	else
		console.log(counter);
}

I forgot that chapter 1 discussed using the || operator "as a way to
fall back on a default value... if you give it an expression that migh produce
an empty value on the left." I rewrote the program to incorporate 
short-circuit evaluation.

Exercise 2 revised 


for (var counter = 1; counter <= 100; counter++){
	output = "";
	if (counter % 3 == 0)
		output += "Fizz";
	if (counter % 5 == 0)
		output += "Buzz";
	console.log(output || counter);
}

Exercise 3 initial


var size = 8, output = "", outputCounter = 0;
for (var line = 0; line < size; line++){
	for (var col = 0; col < size; col++){
		if (size % 2 == 0) {
			if (outputCounter % 2 == 0)
				output += " ";
			else
				output += "#";
			outputCounter++;
		}
		else {
			if (outputCounter % 2 == 0)
				output += "#";
			else
				output += " ";
			outputCounter++;
		}

	}
	output += "\n";
	if (size % 2 == 0)	
		outputCounter++;
}
console.log(output);

The 8x8 grid in the example begins with a space, so I wrote a program 
that starts with a space when the grid is even and starts with a "#" character
when the grid is odd. Then I realized the instructions don't explicitly
ask for this. My revised program starts with a "#" character no matter what,
and the provided solution does this as well.

Exercuse 3 revised

*/

var size = 8, output = "";
for (var line = 0; line < size; line++){
	for (var col = 0; col < size; col++){
		if ((line + col) % 2 == 0)
			output += "#";
		else
			output += " ";
		
	}
	output += "\n";	
}
console.log(output);

