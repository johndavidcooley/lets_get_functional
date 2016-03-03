// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(num1, num2){
    if(num1 > num2) {
    	return num1;
    } else {
    	return num2;
    }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    if(num1 > num2) {
    	if(num1 > num3) {
    		return num1;
    	} else { 
    		return num3;
    	} 
	}
	else {
    	if(num2 > num3) {
    		return num2;
    	} else {
    		return num3;
    	}
    }
};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
	var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
	if(char === vowels[0] || char === vowels[1] || char === vowels[2] || char === vowels[3] || char === vowels[4] || char === vowels[5] || char === vowels[6] || char === vowels[7] || char === vowels[8] || char === vowels[9]) {
		return true;
	} else {
		return false;
	}
};

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    //Tried my best on this one. I think I am somewhat close, but missing a key instruction that will likely seem easy after I see it explained.
    var consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    var stringToArray = phrase.split('');
    var rovarArray = stringToArray.forEach(function(consonants, currentValue) {
    	if(currentValue === consonant[0] || currentValue === consonant[1] || currentValue === consonant[2] || currentValue === consonant[3] || currentValue === consonant[4] || currentValue === consonant[5] || currentValue === consonant[6] || currentValue === consonant[7] || currentValue === consonant[8] || currentValue === consonant[9] || currentValue === consonant[10] || currentValue === consonant[11] || currentValue === consonant[12] ||currentValue === consonant[13] ||currentValue === consonant[14] ||currentValue === consonant[15] ||currentValue === consonant[16] ||currentValue === consonant[17] ||currentValue === consonant[18] ||currentValue === consonant[19] ||currentValue === consonant[20]) {
    	return currentValue + 'o' + currentValue;
    } else {
    	return currentValue;
    }
    var rovarString = rovarArray.join('');
    });
    return rovarString;
};

function rovarspraket(phrase){
    //
    var consonant = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    // var stringToArray = phrase.split('');
    var rovarArray = phrase.forEach(function(consonants, currentValue) {
    	if(currentValue === consonant[0] || currentValue === consonant[1] || currentValue === consonant[2] || currentValue === consonant[3] || currentValue === consonant[4] || currentValue === consonant[5] || currentValue === consonant[6] || currentValue === consonant[7] || currentValue === consonant[8] || currentValue === consonant[9] || currentValue === consonant[10] || currentValue === consonant[11] || currentValue === consonant[12] ||currentValue === consonant[13] ||currentValue === consonant[14] ||currentValue === consonant[15] ||currentValue === consonant[16] ||currentValue === consonant[17] ||currentValue === consonant[18] ||currentValue === consonant[19] ||currentValue === consonant[20]) {
    	return currentValue + 'o' + currentValue;
    } else {
    	return currentValue;
    };
    // var roverString = roverArray.join('');
    // return rovarString;
});
    return rovarArray;
}





// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
	var stringToArray = string.split('');
    var reversedArray = stringToArray.reverse();
    var revArrayToRevString = reversedArray.join('');
    return revArrayToRevString;
};


// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
	// ['alpa', 'beta', 'charlie', 'delta', 'onomatopoeia'] is a ample array I used to test the function above.
	//Take the array of "words". Turn it into a new array consisting of the length of each index.
	//Use Math.max() to calculate the longest word in the set. Identify the position of that value in the array.
	//Return the same position for the "words" array to determine the longest word.
	var wordsToNumbers = words.map(function(currentWord) {
		numArray = currentWord.length;
		return numArray;
	});
	var highestNumber = Math.max.apply(Math,numArray);
	var indexOfHighestNumber = ?????
	return words[indexOfHighestNumber];
};



// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
	var longWords = words.filter(function(currentWord) {
		if(currentWord.length >= i) {
			return currentWord;
		} else {
			return "";
		}
	})
	return longWords;
};

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
	//I have no idea on this one.
}