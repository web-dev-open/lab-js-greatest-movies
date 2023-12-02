// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = require('../src/data');

function getAllDirectors(movies) {
   const directorsArray = movies.map(movie => movie.director);

  return directorsArray;
}

// Call the function with the array of movies
const allDirectors = getAllDirectors(movies);

// Log the result
console.log(allDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const spielbergDramas = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  return spielbergDramas.length;
}

const dramaMoviesBySpielberg = howManyMovies(movies);

console.log(dramaMoviesBySpielberg);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
   
  const moviesWithScore = movies.filter(movie => 'score' in movie && movie.score !== '' && !isNaN(Number(movie.score)));


  if(moviesWithScore.length === 0){
    return 0;
  }

  const totalScore = moviesWithScore.reduce((sum, movie) => sum + movie.score, 0);

  const averageScore = totalScore / moviesWithScore.length;
  const roundedAverage = Math.round(averageScore * 100) / 100;

  return roundedAverage;
}

const averageScore = scoresAverage(movies);

console.log(averageScore);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

  const averageDramaScore = scoresAverage(dramaMovies);
  return averageDramaScore;
}

const averageDramaScore = dramaMoviesScore(movies);

console.log(averageDramaScore);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const sortedMovies = [...movies];

  sortedMovies.sort((a,b) => {
    if(a.year !== b.year) {
      return a.year - b.year;
    }else{
      return a.title.localeCompare(b.title);
    }
  });

  return sortedMovies;
}

const sortedMovies = orderByYear(movies);

console.log(sortedMovies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const sortedMovies = [...movies];

  sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

  const titles = sortedMovies.slice(0, 20).map(movie => movie.title);

  return titles;
}

const titles = orderAlphabetically(movies);

console.log(titles);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

  const updatedMovies = movies.map(movie => {
    const durationArray = movie.duration.split(' ');

    let totalMinutes =0;
    durationArray.forEach(time => {
      if(time.includes('h')){
        totalMinutes += parseInt(time) * 60;
      }else{
        totalMinutes += parseInt(time);
      }
    });

    return {
      ...movies,
      duration:totalMinutes
    };
  });

  return updatedMovies;
}

const moviesWithMinutes = turnHoursToMinutes(movies);

console.log(moviesWithMinutes);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) {
    return null;
  }

  const yearStats = {};

  movies.forEach(movie => {
    if(yearStats[movie.year]) {
      yearStats[movie.year].totalScore += movie.score;
      yearStats[movie.year].movieCount += 1;
    }else{
      yearStats[movie.year] = {
        totalScore: movie.score,
        movieCount: 1
      };
    }
  });

  const averageScores = Object.keys(yearStats).map(year => ({
    year: parseInt(year),
    averageScore : yearStats[year].totalScore / yearStats[year].movieCount
  }));

  const bestYear = averageScores.reduce((best, current) => (current.averageScore > best.averageScore ? current : best));

  return `The best year was ${bestYear.year} with an average score of ${bestYear.averageScore}`;
}

const result = bestYearAvg(movies);

console.log(result);



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
