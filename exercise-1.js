// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum(num1, num2) {
	var result = num1 + num2;
	return result;
};


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg(num1, num2, num3) {
	var total = num1 + num2 + num3;
	var dividend = total / 3;
	return dividend;
};


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength(string) {
	return string.length;
};


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan(num1, num2) {
	if(num1 > num2) {
		return true;
	} else {
		return false;
	}
};


// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet(Name) {
	return "Hello, " + Name + "!";
};


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib(adjective, color, pastTenseVerb, animal) {
	return "The " + adjective + ", " + color + " fox " + pastTenseVerb + " over the lazy " + animal + ".";
};

