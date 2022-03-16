//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

'use strict';
/**
 * @breif Obtain the multiples of a number below a limit
 * @param {number} number Number that we want to obtain multiples 
 * @param {number} maxNumber The limit of the multiples
 * @return {number[]} Multiples of the given number
 */
const obtainMultiples = (number, maxNumber) => {
  const multiples = [];
  if (number === 0) return multiples;

  for (let i = 0; number * i < maxNumber; ++i) {
    multiples.push(number * i);
  }
  return multiples;
}


/**
 * @brief 
 * @param {number[]} numberSequence 
 * @param {number} maxNumber 
 */
export const sum = (numberSequence, maxNumber) => {
  let totalSum = 0;
  const allMultiples = new Set();

  for (const number of numberSequence) {
    const multiples = obtainMultiples(number, maxNumber);
    for (const actualMultiple of multiples) {
      allMultiples.add(actualMultiple);
    }
  }

  for (const number of allMultiples) {
    if (number <= maxNumber) {
      totalSum += number;
    }
  }
  return totalSum;
};