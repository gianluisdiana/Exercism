/**
 * University: Universidad de La Laguna
 * Center: Escuela Superior de Ingeniería y Tecnología
 * Degree: Computer Science
 * Subject: Programación de Aplicaciones Interactivas
 * Course: Third
 * 
 * @author Gian Luis Bolivar Diana
 * @email alu0101336046@ull.edu.es
 * @since Mar 22 2022
 * @desc  Sieve
 *        A function that use the Sieve of Eratosthenes to find all the primes from 2 up to a given number
 * 			 
 * @see Statement {@link https://exercism.org/tracks/javascript/exercises/sieve}
 * @see Sieve_of_Eratosthenes {@link https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes}
**/

export const primes = maxNumber => {
  let allNumbers = [];
  let allPrimes = []

  for (let i = 2; i <= maxNumber;++i) allNumbers.push(i);

  while (allNumbers.length !== 0) {
    let prime = allNumbers[0];
    allNumbers = allNumbers.filter(innerNumber => innerNumber % prime !== 0);
    allPrimes.push(prime);
  }
  
  return allPrimes;
};