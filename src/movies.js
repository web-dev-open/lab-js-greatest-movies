// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const moviesArray = require('../src/data');
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((movie) => movie.director);
  let uniqueDirectors = allDirectors.filter((director, index, self) => {
    self.indexOf(director) === index;
    return self.indexOf(director) === index;
  });
  return uniqueDirectors;
}
const directors = getAllDirectors(moviesArray);
console.log(directors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielbergMovies = moviesArray.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return spielbergMovies.length;
}

const spielbergDrama = howManyMovies(moviesArray);
console.log(spielbergDrama);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let sum = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0);
  let average = sum / moviesArray.length;
  let averageRounded = Number(average.toFixed(2));
  return averageRounded;
}

const averageMovies = scoresAverage(moviesArray);
console.log(averageMovies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes('Drama')
  );
  let averageDrama = dramaMovies.reduce(
    (sum, movie) => sum + (movie.score || 0),
    0
  );
  let averageRounded = Number((averageDrama / dramaMovies.length).toFixed(2));
  return averageRounded;
}

const averageDrama = dramaMoviesScore(moviesArray);
console.log(averageDrama);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let copyArray = [...moviesArray];
  let sortYear = copyArray.sort((a, b) => a.year - b.year);
  return sortYear;
}
const ascendingYears = orderByYear(moviesArray);
console.log(ascendingYears);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

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
    bestYearAvg
  };
}
