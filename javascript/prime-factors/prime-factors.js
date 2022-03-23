//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * @breif Obtain the prime factors of a number
 * @param {number} number The one we'll get the prime factors 
 * @returns {number[]} The prime factors
 */
export const primeFactors = number => {
  let factors = [];

  let primeNumber = 2;
  while (number !== 1) {
    if (number % primeNumber === 0) {
      factors.push(primeNumber);
      number /= primeNumber;
      primeNumber = 2;
    } else {
      ++primeNumber;
    }

  }
  return factors;
};