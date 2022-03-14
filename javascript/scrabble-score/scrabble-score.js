//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const VALUE_1 = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
const VALUE_2 = ['D', 'G']
const VALUE_3 = ['B', 'C', 'M', 'P']
const VALUE_4 = ['F', 'H', 'V', 'W', 'Y']
const VALUE_5 = ['K']
const VALUE_8 = ['J', 'X']
const VALUE_10 = ['Q', 'Z']

export const score = word => {
  let totalScore = 0;
  for (const char of word) {
    if (VALUE_1.includes(char.toUpperCase())) {
      ++totalScore;
    } else if (VALUE_2.includes(char.toUpperCase())) {
      totalScore += 2;
    } else if (VALUE_2.includes(char.toUpperCase())) {
      totalScore += 2;
    } else if (VALUE_3.includes(char.toUpperCase())) {
      totalScore += 3;
    } else if (VALUE_4.includes(char.toUpperCase())) {
      totalScore += 4;
    } else if (VALUE_5.includes(char.toUpperCase())) {
      totalScore += 5;
    } else if (VALUE_8.includes(char.toUpperCase())) {
      totalScore += 8;
    } else if (VALUE_10.includes(char.toUpperCase())) {
      totalScore += 10;
    }
  }
  return totalScore;
};
