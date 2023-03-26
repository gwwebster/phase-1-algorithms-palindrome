function isPalindrome(word) {
  //Convert input to lowercase
  let lowerCaseWord = word.toLowerCase()
  //Check if input has spaces -- if so, remove
  if (lowerCaseWord.includes(" ") === true) {
    let concatWord = lowerCaseWord.replace(/ /g, "")
    if (isEven(concatWord) === true) {
      return evenIsPalindrome(concatWord)
    } else {
      return oddIsPalidrome(concatWord)
    }
  }
  if (isEven(lowerCaseWord) === true) {
    return evenIsPalindrome(lowerCaseWord)
  } else {
    return oddIsPalidrome(lowerCaseWord)
  }
};

//Check if word is even/odd
function isEven(word) {
  let wordLength = word.length
  if (Number.isInteger(wordLength/2) === true) {
    return true
  } else {
    return false
  }
}

//Check if even-numbered string is palindrome
function evenIsPalindrome(word) {
  let halfWordLength = word.length/2
  let counter = 0
  for (let i = 0; i < halfWordLength; i++) {
    let negativeIndex = (Math.abs(i + 1) * -1)
    if (word[i] === word.at(negativeIndex)) {
      counter = counter + 1
    } else { 
      return false
    }
  }
  if (counter === halfWordLength) {
    return true
  }
};

//Check if odd-numbered string is palindrome
function oddIsPalidrome(word) {
  let halfWordLength = (word.length - 1)/2
  let counter = 0
  for (let i = 0; i < halfWordLength; i++) {
    let negativeIndex = (Math.abs(i + 1) * -1)
    if (word[i] === word.at(negativeIndex)) {
      counter = counter + 1
    } else { 
      return false
    }
  }
  if (counter === halfWordLength) {
    return true
  }
};

/* 
  First, convert word to all lowercase 
  Then, check if word has spaces
    If so, remove spaces
  Then, check if input word is odd/even
  If even, use length of word to check if indexes from left are equal to negative indexes from right
  If odd, use length of word - 1 to check if indexes from left are equal to negative indexes from right
*/


if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("Racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("civic"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("taco cat"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("test"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("taco"));
}

module.exports = isPalindrome;
