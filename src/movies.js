const moviesArray = require('../src/data');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}
const allDirectors = getAllDirectors(moviesArray);
console.log(allDirectors);
function getUniqueDirectors(moviesArray) {
  const allDirectors = getAllDirectors(moviesArray);
  return [...new Set(allDirectors)];
}
const uniqueDirectors = getUniqueDirectors(moviesArray);
console.log(uniqueDirectors);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}
const stevenSpielbergDramaCount = howManyMovies(moviesArray);
console.log(stevenSpielbergDramaCount);
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0; 
}
const totalScores = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0);
const averageScore = totalScores / moviesArray.length;
return parseFloat(averageScore.toFixed(2));
}
const averageScore = scoresAverage(moviesArray);
console.log(averageScore);
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length === 0) {
        return 0; 
    }
    const totalScores = dramaMovies.reduce((sum, movie) => sum + (movie.score || 0), 0);
    const averageScore = totalScores / dramaMovies.length;
    return averageScore;
}
const averageDramaScore = dramaMoviesScore(moviesArray);
console.log(averageDramaScore);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.slice().sort((a, b) => {
    if (a.year === b.year) {
        return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
});
}
const orderedMoviesByYear = orderByYear(moviesArray);
console.log(orderedMoviesByYear);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = moviesArray.slice().sort((a, b) => a.title.localeCompare(b.title));
    const first20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);
    return first20Titles;
}
const first20Titles = orderAlphabetically(moviesArray);
console.log(first20Titles);
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const durationParts = movie.duration.match(/\d+/g); 
    const hours = parseInt(durationParts[0]) || 0; 
    const minutes = parseInt(durationParts[1]) || 0; 
    const totalMinutes = hours * 60 + minutes;
    return {
        ...movie,
        duration: totalMinutes
    };
});
}
const moviesWithMinutes = turnHoursToMinutes(moviesArray);
console.log(moviesWithMinutes);
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  const yearlyAverages = {};
  moviesArray.forEach(movie => {
      const year = moviesArray.year;
      const score = moviesArray.score || 0;
      if (!yearlyAverages[year]) {
          yearlyAverages[year] = { totalScore: score, movieCount: 1 };
      } else {
          yearlyAverages[year].totalScore += score;
          yearlyAverages[year].movieCount += 1;
      }
  });
    const averages = Object.keys(yearlyAverages).map(year => ({
      year: parseInt(year),
      average: parseFloat((yearlyAverages[year].totalScore / yearlyAverages[year].movieCount).toFixed(2))
  }));
    const bestYear = averages.reduce((best, current) => (current.average > best.average ? current : best));

    return `The best year was ${bestYear.year} with an average score of ${bestYear.average}`;
  
}
const bestYearInfo = bestYearAvg(moviesArray);
console.log(bestYearInfo);


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined'){
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
