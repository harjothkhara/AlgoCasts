// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // compare str to reverse str, if equal return true, else false
  // 1. use the built in reverse method
  // [a,b,b,a] -> reverse  -> 'abba'
  // return str === [...str].reverse().join('');
  // return str === str.split('').reverse().join('')

  // 2. loop through each char and add each to variable in reverse order. compare reversed variable with original string
  // str = abcdefg

  let reversedStr = '';
  for (let i = 0; i < str.length; i++) {
    reversedStr = str[i] + reversedStr;
  }
  // for(let i = str.length - 1; i >= 0; i--) {
  //   // reversedStr = reversedStr + str[i];
  //   reversedStr += str[i];
  // }
  return str === reversedStr;

  // another way:
  //  a,b,c,b,a
  //  |       |

  // return str.split('').every((char,i) => return char === str[str.length-1-i])
}

module.exports = palindrome;
