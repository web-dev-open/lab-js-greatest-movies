// First of all let's import the data
const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

console.log(`\nIteration 1: All directors`)

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(movie => movie.director);

  // Bonus - Iteration 1.1: Clean the array of directors
  const uniqueDirectors = [... new Set(directors)];
  return uniqueDirectors;
}

// Showing the result.
console.log(`The directors of the 250 most famous movies are: ${getAllDirectors(movies)}`);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

console.log("Iteration 2: Steven Spielberg. The best?");

function howManyMovies(moviesArray) {

  // Create a variable to keep Spielberg movies
  const spielberg = moviesArray.filter(movie => movie.director === "Steven Spielberg");

  // Create a variable to count the Drama Movies
  const dramaCount = spielberg.filter(movie => movie.genre.includes("Drama")).length;

  // return the counter
  return dramaCount;
}

// Print the result.
console.log(`\nSteven Spielberg has been directed ${howManyMovies(movies)} drama movies which are in the top of 250 greatest movies of all the time`)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



console.log("\n");

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
