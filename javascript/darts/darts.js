//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (xPosition, yPosition) => {
  const distance = Math.sqrt(xPosition * xPosition + yPosition * yPosition);

  if (distance > 10) return 0;
  if (distance > 5) return 1;
  if (distance > 1) return 5;
  return 10;
  
};
