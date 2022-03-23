//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * @brief Checks if a givn number is armstrong
 * @param {number} number The number to test
 * @returns If the number is armstrong
 */
export const isArmstrongNumber = number => {
  let sumOfDigits = 0;
  let remainingNumber = number;
  const NUMBER_OF_DIGITS = String(number).length;

  for (let i = 0; NUMBER_OF_DIGITS !== i; ++i) {
    sumOfDigits += Math.pow(remainingNumber % 10, NUMBER_OF_DIGITS);
    remainingNumber = Math.floor(remainingNumber / 10);
  }

  return sumOfDigits === number ? true : false;
};
