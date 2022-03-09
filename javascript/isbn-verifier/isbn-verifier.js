/**
 * Universidad: Universidad de La Laguna
 * Centro: Escuela Superior de Ingeniería y Tecnología
 * Grado: Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: Tercero
 *
 * @author Gian Luis Bolivar Diana
 * @email alu0101336046@ull.edu.es
 * @since March 09 2022
 * @desc Isbn Verifier
 *         A program that reads a string, and verify if its
 *         an ISBN code.
 * 
 * @see Enunciado {@link https://exercism.org/tracks/javascript/exercises/isbn-verifier}
 */

 'use strict';

/**
* @brief Checks if a given ISBN password is  valid
* @param {string} password 
* @returns If the ISBN password is valid
*/
export const isValid = password => {
  const FILTERED_PASSWORD = password.replaceAll('-', '');
  let passwordDecoded = 0;

  for (let i = 0; i < 10; i++) {
    if (FILTERED_PASSWORD[i] === 'X') {
      if (i === 9) {
        passwordDecoded += (10 - i) * 10;
      } else {
        continue;
      }
    } else {
      passwordDecoded += (10 - i) * FILTERED_PASSWORD[i];
    }
  }
  if (FILTERED_PASSWORD.length > 10) return false;
  
  return (passwordDecoded % 11 === 0)
};