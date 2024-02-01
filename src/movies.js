// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => movie.director);
  const uniqueDirectors = [...new Set(directors)];
  return uniqueDirectors;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {}
function howManyMovies(moviesArray) {
  const stevenDrama = moviesArray.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );
  return stevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let sum = 0;
  moviesArray.forEach((movie) => {
    if (movie.score) {
      sum += movie.score;
    }
  });
  const average = sum / moviesArray.length;
  return Number(average.toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}
function dramaMoviesScore(moviesArray) {
  const dramaMovie = moviesArray.filter((movie) =>
    movie.genre.includes('Drama'));

    if(dramaMovie.length === 0){
      return 0;
    }
  const dramaAverage = dramaMovie.reduce((acc, movie) => acc + movie.score, 0);
  return Number((dramaAverage / dramaMovie.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}
function orderByYear(moviesArray) {
  const sortedByYear = moviesArray.slice().sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}
function orderAlphabetically(moviesArray) {
  const sortedTitles = moviesArray.map((movie) => movie.title).sort().slice(0, 20);
  return sortedTitles;
}

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
