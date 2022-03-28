const yearsInPlanets = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

/**
 * @brief Calculate how old is a person in another planet
 * @param {string} planet Tha planet 
 * @param {number} timeInSeconds The age in earth seconds of a person
 * @return {number} The person's age in that planet
 */
export const age = (planet, timeInSeconds) => {
  const secondsToEarthYears = 31557600;

  return Number((timeInSeconds / (secondsToEarthYears * yearsInPlanets[planet])).toFixed(2));

};