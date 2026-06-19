// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => 
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce((acc, movie) => {
    if (typeof movie.score === 'number') {
      return acc + movie.score;
    }
    return acc;
  }, 0);

  const average = totalScore / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray];

  return sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles = moviesArray.map(movie => movie.title);
  
  titles.sort((a, b) => a.localeCompare(b));

  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const movieCopy = { ...movie };
    let totalMinutes = 0;

    if (movieCopy.duration) {
      const hoursMatch = movieCopy.duration.match(/(\d+)h/);
      const minutesMatch = movieCopy.duration.match(/(\d+)min/);

      if (hoursMatch) {
        totalMinutes += parseInt(hoursMatch[1], 10) * 60;
      }
      if (minutesMatch) {
        totalMinutes += parseInt(minutesMatch[1], 10);
      }
    }

    movieCopy.duration = totalMinutes;
    return movieCopy;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const scoresByYear = {};

  moviesArray.forEach(movie => {
    if (!scoresByYear[movie.year]) {
      scoresByYear[movie.year] = [];
    }
    if (typeof movie.score === 'number') {
      scoresByYear[movie.year].push(movie.score);
    }
  });

  let bestYear = null;
  let bestAvg = -1;

  for (const year in scoresByYear) {
    const scores = scoresByYear[year];
    const total = scores.reduce((sum, score) => sum + score, 0);
    const avg = total / scores.length;

    if (avg > bestAvg) {
      bestAvg = avg;
      bestYear = year;
    } else if (avg === bestAvg && parseInt(year, 10) < parseInt(bestYear, 10)) {
      bestYear = year;
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
    bestYearAvg,
  };
}