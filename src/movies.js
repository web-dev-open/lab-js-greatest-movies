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
function orderAlphabetically(moviesArray) {
  let copyArray = [...moviesArray];
  let sortTitle = copyArray.sort((a, b) => a.title.localeCompare(b.title));
  return sortTitle.slice(0, 20).map((movie) => movie.title);
}

const orderTitle = orderAlphabetically(moviesArray);
console.log(orderTitle);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let toMinutes = moviesArray.map((movie) => {
    const splitHourMinute = movie.duration.split(' ');
    let totalMinutes = 0;

    splitHourMinute.forEach((part) => {
      if (part.includes('h')) {
        totalMinutes += parseInt(part) * 60;
      } else {
        totalMinutes += parseInt(part);
      }
    });
    return { ...movie, duration: totalMinutes };
  });
  return toMinutes;
}

const minutes = turnHoursToMinutes(moviesArray);
console.log(minutes);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const years = Array.from(new Set(moviesArray.map((movie) => movie.year)));

  const averageScores = years.map((year) => {
    const moviesOfYear = moviesArray.filter((movie) => movie.year === year);
    const average = scoresAverage(moviesOfYear);
    return { year, average };
  });

  const bestYear = averageScores.reduce((best, current) => {
    if (
      current.average > best.average ||
      (current.average === best.average && current.year < best.year)
    ) {
      return current;
    }
    return best;
  });

  return `The best year was ${bestYear.year} with an average score of ${bestYear.average}`;
}

const bestYear = bestYearAvg(moviesArray);
console.log(bestYear);

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
