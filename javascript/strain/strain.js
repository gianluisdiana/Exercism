//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
* @brief Keep the items from a collection if the predicate is true
* @param {array} collection Array of elements 
* @param {function} predicate The condition to fulfill
* @returns {array} The items where the predicate is true
*/
export const keep = (collection, predicate) => {
  let result = [];
  for (const item of collection) {
    if (predicate(item)) result.push(item);
  }
  return result;
};

/**
* @brief Keep the items from a collection if the predicate is false
* @param {array} collection Array of elements 
* @param {function} predicate The condition to fail
* @returns {array} The items where the predicate is false
*/
export const discard = (collection, predicate) => {
  let result = [];
  for (const item of collection) {
    if (!predicate(item)) result.push(item);
  }
  return result;
};
