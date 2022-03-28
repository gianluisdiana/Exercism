/**
 * 
 * @param {string} setence 
 * @return {bool}
 */
export const isPangram = sentence => {
  let alphabet = [];
  const cleanedSentence = sentence.toLowerCase().match(/[a-z]/g) ?? [];

  for (const character of cleanedSentence) {
    if (!alphabet.includes(character)) alphabet.push(character);
  }

  return alphabet.length === 26;
};