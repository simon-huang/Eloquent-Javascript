/*
Exercise 1 Flattening

var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(a,b){
	return a.concat(b);
}));
// → [1, 2, 3, 4, 5, 6]

Exercise 2 Mother-Child Age Difference

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
var ageWhenChildBorn = [];
ancestry.forEach(function(person){
	if (person.mother in byName) 
        ageWhenChildBorn.push(byName[person.mother].born-person.born);
});

console.log(average(ageWhenChildBorn));
// → 31.2

The provided solution is as follows:

var differences = ancestry.filter(function(person) {
  return byName[person.mother] != null;
}).map(function(person) {
  return person.born - byName[person.mother].born;
});

console.log(average(differences));

The provided solution uses more of the newly 
taught methods while mine relies on a more basic if
conditional statement, but the logic is similar.

Exercise 3 Historical Life Expectancy
Initial Solution

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
// Your code here.


var mapped = {};
for (var i = 0; i < ancestry.length; i++){
  if (!(Math.ceil(ancestry[i].died/100) in mapped)){
     mapped[Math.ceil(ancestry[i].died/100)] = [];}
  mapped[Math.ceil(ancestry[i].died/100)].push(ancestry[i].died-ancestry[i].born);
}

for (prop in mapped){
console.log(prop + ": " + average(mapped[prop]));}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94

I tried to write a groupBy function to abstract the grouping operation but couldn't
get it to work until I realized I hadn't reworked my initial solution enough. 
I still have references to ancestry in my abstraction. I had to move the calculations
to a later step. 

Exercise 3 Revised Solution

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
// Your code here.

function groupBy(array,func){
  var mapped = {};
  array.forEach(function(element){
    if (!(func(element) in mapped))
      mapped[func(element)] = [];
    mapped[func(element)].push(element);
  });
  return mapped;
}

var mapped = groupBy(ancestry, function(person){
	return Math.ceil(person.died/100);
});

for (prop in mapped){
  	var ages = mapped[prop].map(function(person){
    	return person.died - person.born;
    });                        
	console.log(prop + ": " + average(ages));
}

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94


Exercise 4 Every And Then Some


function every(array, checker){
	for (var i = 0; i < array.length ; i++) 
		if (!(checker(array[i])))
			return false;
	return true;
}

function some(array,checker){
	for (var i = 0; i < array.length ; i++)
		if (checker(array[i]))
			return true;
	return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false

*/

console.log([[1,2,"happy day"], 2,3,4].toString());







