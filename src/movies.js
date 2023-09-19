// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

// const movies = require('./data');

// const movies = require('./data');

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorArray = moviesArray.map((movie) => movie.director);
  return directorArray;
}

console.log(getAllDirectors(movies));
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovies = moviesArray.filter(
    (spiel) =>
      spiel.director === 'Steven Spielberg' && spiel.genre.includes('Drama')
  );

  return spielbergMovies.length;
}

console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const averageScore = moviesArray.reduce((acc, currentScore) => {
    return currentScore.score === undefined ? acc : (acc += currentScore.score);
  }, 0);

  return Number((averageScore / moviesArray.length).toFixed(2));
}

console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((genre) =>
    genre.genre.includes('Drama')
  );
  if (dramaMovies.length === 0) return 0;
  const averageDramaScore = dramaMovies.reduce((acc, currentDramaScore) => {
    return currentDramaScore.score === undefined
      ? acc
      : (acc += currentDramaScore.score);
  }, 0);

  return Number(averageDramaScore / dramaMovies.length).toFixed(2);
}

console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = moviesArray.map((movie) => movie);
  const newArrayAscYear = newArray.sort((a, b) => a.year - b.year);

  return newArrayAscYear;
}

console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titleArray = [];
  for (let i = 0; i < moviesArray.length; i++) {
    titleArray.push(moviesArray[i].title);
  }
  const ascTitleArray = titleArray.sort();
  const reducedArray = ascTitleArray.slice(0, 20);
  return reducedArray;
}

console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const duration = movie.duration.split(' ');
    let minutes = 0;
    for (let time of duration) {
      if (time.includes('h')) {
        minutes += parseInt(time) * 60;
      } else {
        minutes += parseInt(time);
      }
    }
    return {
      ...movie,
      duration: minutes
    };
  });
}

console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) return null;
  const movieRatesByYear = movies.reduce((accumulator, movie) => {
    const { year, score } = movie;
    if (!accumulator[year]) {
      accumulator[year] = [];
    }
    accumulator[year].push(score);
    return accumulator;
  }, {});
  const bestYearRateCombo = Object.entries(movieRatesByYear)
    .map((item) => {
      const year = item[0];
      const rateArray = item[1];
      const averageScore = rateArray.reduce((sum, value) => {
        return sum + value / rateArray.length;
      }, 0);
      return { year, averageScore };
    })
    .reduce((bestItem, item) => {
      if (
        typeof bestItem === 'undefined' ||
        item.averageScore > bestItem.averageScore
      ) {
        return item;
      } else {
        return bestItem;
      }
    });
  return `The best year was ${bestYearRateCombo.year} with an average score of ${bestYearRateCombo.averageScore}`;
}

console.log(bestYearAvg(movies));

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

