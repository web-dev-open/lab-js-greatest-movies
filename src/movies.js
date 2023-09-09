
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//I'm in love with ES6
function getAllDirectors(moviesArray) {
 const directedBy = moviesArray.map(p=>p.director);
 return directedBy;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const moviesSteven = moviesArray.filter( p=>p.director === 'Steven Spielberg'&& p.genre.includes('Drama') );
  return moviesSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const totalScore = moviesArray.reduce(function (acc, curr) {
    return acc + (curr.score || 0); 
  }, 0);
  const average = totalScore / moviesArray.length;
  const roundedAverage = Math.round(average * 100) / 100;
  return roundedAverage;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(p=>p.genre.includes('Drama') );
  if (dramaMovies.length === 0) {
    return 0;
  }
  return  scoresAverage(dramaMovies)};
  


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = moviesArray.slice();
  sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedAlpha = moviesArray.slice();
  const again = sortedAlpha.sort((a, b) => a.title.localeCompare(b.title));
  const firstT = again.slice(0,20);
  return firstT.map(movie => movie.title);
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
