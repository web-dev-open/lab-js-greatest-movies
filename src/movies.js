// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => {
    return movie.director;
  });

  return directors.filter((value, index, arr) => arr.indexOf(value) === index);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const findMovieAuthor = moviesArray.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });

  return findMovieAuthor.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  else {
    const validMovies = moviesArray.filter(
      (movie) => typeof movie.score === 'number' && !isNaN(movie.score)
    );

    const totalScores = validMovies.reduce((accumulator, movie) => {
      return (accumulator += movie.score);
    }, 0);

    const averageScore = totalScores / moviesArray.length;
    return parseFloat(averageScore.toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama');
  });

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const arrangeMovies = moviesArray.slice().sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; // Sort by year in ascending order
    } else {
      // If the years are the same, sort alphabetically by title
      return a.title.localeCompare(b.title);
    }
  });

  if (arrangeMovies.length !== 0) {
    return arrangeMovies;
  }
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // Get the movie title for each movie and return and arary of movie titles
  const movieTitles = moviesArray.map((movie) => movie.title);

  const arrangeTitles = movieTitles.sort(); //sort the titles i ascending order

  return arrangeTitles.slice(0, 20); //return top 20 elements
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // create a new array with duration in minutes
  return moviesArray.map((movie) => {
    const durationParts = movie.duration.split(' ');
    let totalMinutes = 0;

    for (const part of durationParts) {
      if (part.includes('h')) totalMinutes += parseInt(part, 10) * 60;
      else if (part.includes('min')) totalMinutes += parseInt(part, 10);
    }

    return { ...movie, duration: totalMinutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  // Crate an object ot store average score for each year
  const yearAvgScores = {};

  // Calculate average scores for each year
  moviesArray.forEach((movie) => {
    const year = movie.year;
    const score = movie.score || 0;

    if (!yearAvgScores[year]) {
      yearAvgScores[year] = { totalScore: 0, count: 0 };
    }

    yearAvgScores[year].totalScore += score;
    yearAvgScores[year].count += 1;
  });

  // Find the year with the best average score
  let bestYear = null;
  let bestAvg = 0;

  for (const year in yearAvgScores) {
    const avg = yearAvgScores[year].totalScore / yearAvgScores[year].count;

    if (avg > bestAvg || (avg === bestAvg && year < bestYear)) {
      bestYear = year;
      bestAvg = avg;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
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
    bestYearAvg
  };
}
