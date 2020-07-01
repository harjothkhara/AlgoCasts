// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let newstr = '';
  for (let char of str) {
    newstr = char + newstr;
    debugger;
  }
  return newstr;
}

reverse('asdf');

// function reverse(str) {
//  return str.split('').reverse().join('')
// }

// function reverse(str) {
//   let newstr = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     newstr += str[i];
//   }
//   return newstr;
// }

// let newstr = '';
// for (let char of str) {
//   newstr = char + newstr;
// }
// return newstr;

// function reverse(str) {
//   return str.split('').reduce((reverse, character) => character + reverse, '');
// }

module.exports = reverse;
