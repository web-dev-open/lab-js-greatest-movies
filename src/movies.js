// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

//const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(moviesArray => moviesArray.director);
}

const directors = getAllDirectors(movies);
console.log(directors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(moviesArray => moviesArray.director === "Steven Spielberg" && moviesArray.genre.includes("Drama")).length;
}
const numberOfDramaMovies = howManyMovies(movies);
console.log(numberOfDramaMovies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce((sum, movie) => {
    return sum + (movie.score || 0);
  }, 0);
  const averageScore = totalScore / moviesArray.length;
  return parseFloat(averageScore.toFixed(2));
}
const averageScore = scoresAverage(movies);
console.log(averageScore);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));

  if (dramaMovies.length === 0) return 0;
  const totalScores = dramaMovies.reduce((sum, movie) => {
    return sum + (movie.score || 0);
  }, 0);
  const averageScores = totalScores / dramaMovies.length;
  return parseFloat(averageScores.toFixed(2));
}
const dramaAveraeScore = dramaMoviesScore(movies);
console.log(dramaAveraeScore);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];

  moviesCopy.sort((a, b) => {
    if (a.year === b.year){
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return moviesCopy;
}
const sortedMovies = orderByYear(movies);
console.log(sortedMovies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map(movie => movie.title);
  titles.sort((a, b) => a.localeCompare(b));
  return titles.slice(0, 20);
}

const first20Titles = orderAlphabetically(movies);
console.log(first20Titles);

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
    bestYearAvg,
  };
}
