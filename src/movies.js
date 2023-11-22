// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map(movie => movie.director);
  return [...new Set(directors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let dramaMoviesOfSteven = moviesArray.filter((movie) =>
    movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'
  );
  return dramaMoviesOfSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  let totalScores = moviesArray.reduce(
    (acc, movie) => (acc + (movie.score ||  0)),
    0
  );
  let avg = totalScores / moviesArray.length;
  return parseFloat(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  return dramaMovies.length === 0 ? 0 : scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let copiedArray = [...moviesArray]
  return copiedArray.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    else return a.title.localeCompare(b.title)
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let copiedArray = [...moviesArray];
  return copiedArray
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map((movie) => movie.title);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    let duration = movie.duration;
    let hours = 0, minutes = 0

    if (duration.includes('h') && duration.includes('min')) {
      let [hourString, minuteString] = duration.split(' ');

      hours = parseInt(hourString.split('h')[0] * 60);
      minutes = parseInt(minuteString.split('min')[0]);
    }
    else if (duration.includes('h')) {
      hours = parseInt(duration.split('h')[0] * 60);
    } else {
      minutes = parseInt(duration.split('min')[0]);
    }

    return {...movie, duration: hours + minutes}
  })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;

  let yearScores = moviesArray.reduce((acc, movie) => {
    acc[movie.year] = acc[movie.year] || { sum: 0, count: 0 };
    acc[movie.year].sum += movie.score;
    acc[movie.year].count++;
    return acc;
  }, {});

  let bestYear = Object.keys(yearScores).reduce((best, year) => {
    let avgScore = yearScores[year].sum / yearScores[year].count;
    if (
      !best ||
      avgScore > best.avgScore ||
      (avgScore === best.avgScore && year < best.year)
    ) {
      return { year, avgScore };
    }
    return best;
  }, null);

  return `The best year was ${
    bestYear.year
  } with an average score of ${parseFloat(bestYear.avgScore.toFixed(1))}`;
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
