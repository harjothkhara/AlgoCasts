// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //  15  981   500   -15   -90
  //  51  189   005   -51   -09
  //              5         -9
  // reverse string variable we will be building
  let reverse = '';
  // turn integer into a string
  const y = n + '';
  // turn string into an array
  let arrY = y.split('');
  // edgecase: add '-' first item in array
  if (arrY[0] === '-') {
    // add '-' to the front of variable
    reverse += arrY[0];
    // remove '-' from arr we will be iterating through
    arrY = arrY.slice(1);
  }
  // loop through the integer starting from the end
  for (let i = arrY.length - 1; i >= 0; i--) {
    // add each integer to variable in reverse order
    reverse += arrY[i];
  }
  return Number(reverse);
}

module.exports = reverseInt;
