//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = number => {
  if (number <= 0) throw new Error('Classification is only possible for natural numbers.')
  
  let result = 0;
  for (let i = 0; i <= number / 2; ++i) {
    if (number % i === 0) result += i; 
  }

  if (result === number) {
    return 'perfect';
  } else if (result > number) {
    return 'abundant';
  } else {
    return 'deficient';
  }
};
