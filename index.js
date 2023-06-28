function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

//My code to solve the Palindrome challenge
function isPalindrome(word) {
  const reverseWord = word.split("").reverse().join("");
  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("kingdom"));