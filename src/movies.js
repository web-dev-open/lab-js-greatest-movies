// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

let movies = [];
function getAllDirectors(movies) {
    return movies.map(movie => movie.director);

}
getAllDirectors(movies);


//iteration 1.1 Clean the array of Directors
function getAllDirectorsArray(movies) {
  let directors = movies.map(movie => movie.director);
  return directors.filter((director, index) => directors.indexOf(director) === index);
}
getAllDirectorsArray(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length === 0) return 0;
    let spielbergDramas = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return spielbergDramas.length;
}
howManyMovies(movies);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) return 0;
    let totalScore = movies.reduce((sum, movie) => sum + (movie.score || 0), 0);
    return Number((totalScore / movies.length).toFixed(2));
}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    return scoresAverage(dramaMovies);
}

dramaMoviesScore(movies);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let sortedMovies = [...movies];
    sortedMovies.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return sortedMovies;
}
 dramaMoviesScore(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let titles = movies.map(movie => movie.title);
  titles.sort((a, b) => a.localeCompare(b));
  return titles.slice(0, 20);
}

orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    let duration = movie.duration;
    let hours = 0;
    let minutes = 0;

    if (duration.includes('h')) {
        hours = parseInt(duration.slice(0, duration.indexOf('h')));
    }
    if (duration.includes('min')) {
        minutes = parseInt(duration.slice(duration.indexOf(' ') + 1, duration.indexOf('min')));
    }

    return {...movie, duration: hours * 60 + minutes};
});
}
turnHoursToMinutes(movies);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) return null;

  const yearlyScores = movies.reduce((acc, movie) => {
      if (!acc[movie.year]) {
          acc[movie.year] = [movie.score];
      } else {
          acc[movie.year].push(movie.score);
      }
      return acc;
  }, {});

  let bestYear = '';
  let bestAvgScore = 0;
  let oldestYear = Infinity;

  for (let year in yearlyScores) {
      const scores = yearlyScores[year];
      const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;

      if (avgScore > bestAvgScore || (avgScore === bestAvgScore && parseInt(year) < oldestYear)) {
          bestYear = year;
          bestAvgScore = avgScore;
          oldestYear = parseInt(year);
      }
  }

  // Format the average score with one decimal place if it's not a whole number
  const formattedAvgScore = bestAvgScore % 1 === 0 ? bestAvgScore.toFixed(0) : bestAvgScore.toFixed(1);

  return `The best year was ${oldestYear} with an average score of ${formattedAvgScore}`;
}


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
