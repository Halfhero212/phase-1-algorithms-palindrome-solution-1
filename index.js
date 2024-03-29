function isPalindrome(word) {
  let start = 0;
  let end = word.length - 1;

  while (start < end) {
    if (word[start] !== word[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

/* 
  function isPalindrome takes a string word
  Initialize start index to 0
  Initialize end index to word's length - 1
  While start index is less than end index
    If character at start index is not equal to character at end index
      return false
    Increment start index
    Decrement end index
  return true

*/

/*
The isPalindrome function checks if a given word is a palindrome by comparing characters from the beginning and the end moving towards the center. It iterates over the word until the middle is reached, during which if any mismatch is found, it returns false immediately, indicating the word is not a palindrome. If the iteration completes without finding any mismatch, it means the word reads the same backward as forward, and hence, the function returns true.
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
