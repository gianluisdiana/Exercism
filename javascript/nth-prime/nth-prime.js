//
// This is only a SKELETON file for the 'Nth Prime' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * @brief Determine if a number is prime
 * @param {number} number Number to test
 * @return {boolean} If the number is prime
 */

const isPrime = number => {
  if (number === 1) return true;

  for (let i = 2; i <= number / 2; ++i) {
    if (number % i === 0) return false;
  }

  return true;
}

/**
 * @brief Determine what the nth prime is.
 * @param {number} numberN Position of the prime number
 * @returns {number} The n prime number
 */
export const prime = numberN => {
  if (numberN === 0) throw new Error('there is no zeroth prime');

  const primeNumbers = [];
  
  for (let i = 2; ; ++i) {
    if (isPrime(i)) primeNumbers.push(i);
    if(primeNumbers.length === numberN) break;
  }

  return primeNumbers[numberN - 1];
};