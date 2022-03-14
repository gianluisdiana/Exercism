/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus (timer) {
  if (timer === 0) {
    return 'Lasagna is done.';
  } else if (timer === undefined) {
    return 'You forgot to set the timer.';
  } else if (timer !== 0) {
    return 'Not done, please wait.';
  } 
}

export function preparationTime (layers, averageTime = 2) {
  return layers.length * averageTime;
}

export function quantities (layers) {
  let layersOfSauce = 0;
  let layersOfNoodles = 0;
  
  for (const layer of layers) {
    if (layer === 'sauce') {
      ++layersOfSauce;
    } else if (layer === 'noodles') {
      ++layersOfNoodles;
    }             
  }
  
  return {
    noodles: layersOfNoodles * 50,
    sauce: layersOfSauce * 0.2,
  };
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe (recipe, numberOfPortions) {
  let scaleRecipe = {};
  for (const ingredients in recipe) {
    scaleRecipe[ingredients] = recipe[ingredients] * numberOfPortions / 2;
  }
    return scaleRecipe;
}



