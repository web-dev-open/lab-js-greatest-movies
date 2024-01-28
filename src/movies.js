// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return movies.map(movie => movie.director);
}
function cleanDirectorsArray(directors) {
  // Use Set to create a unique set of directors and then convert it back to an array
  return [...new Set(directors)];
}

const allDirectors = getAllDirectors(movies);
console.log(allDirectors);

const uniqueDirectors = cleanDirectorsArray(allDirectors);
console.log(uniqueDirectors);





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}
const spielbergDramaMoviesCount = howManyMovies(movies);
console.log(spielbergDramaMoviesCount);





// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (movies.length === 0) {
    return 0;
  }

  // Calculate the average score rounded to 2 decimals
  const totalScore = movies.reduce((sum, movie) => sum + (movie.score || 0), 0);
  const averageScore = totalScore / movies.length;

  return parseFloat(averageScore.toFixed(2));
}
const averageScore = scoresAverage(movies);
console.log(averageScore);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

  
  if (dramaMovies.length === 0) {
    return 0;
  }

  // Calculate the average score of drama movies rounded to 2 decimals
  const totalScore = dramaMovies.reduce((sum, movie) => sum + (movie.score || 0), 0);
  const averageScore = totalScore / dramaMovies.length;

  return parseFloat(averageScore.toFixed(2));
}
const dramaAverageScore = dramaMoviesScore(movies);
console.log(dramaAverageScore);



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...movies];

  // Sort the movies first by year, then by title if the years are the same
  sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; // Sort by year in ascending order
    } else {
      return a.title.localeCompare(b.title); // If years are the same, sort by title alphabetically
    }
  });

  return sortedMovies;


}

const sortedMovies = orderByYear(movies);
console.log(sortedMovies);





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...movies];

  // Sort the movies alphabetically by title
  sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

  // Extract titles of the first 20 movies or all if less than 20
  const first20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);

  return first20Titles;
}
const first20Titles = orderAlphabetically(movies);
console.log(first20Titles);



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const modifiedMovies = movies.map(movie => {
   
    const durationArray = movie.duration.match(/\d+/g);
    const hours = parseInt(durationArray[0]) || 0;
    const minutes = parseInt(durationArray[1]) || 0;

   
    const totalMinutes = hours * 60 + minutes;

    return {
      ...movie,
      duration: totalMinutes,
    };
  });

  return modifiedMovies;
}
const moviesWithMinutes = turnHoursToMinutes(movies);
console.log(moviesWithMinutes);



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (movies.length === 0) {
    return 'No movies in the array.';
  }

 
  const averageScoresByYear = {};

  
  movies.forEach(movie => {
    const year = movie.year;
    const score = movie.score || 0;

    if (!averageScoresByYear[year]) {
      averageScoresByYear[year] = { totalScore: 0, movieCount: 0 };
    }

    averageScoresByYear[year].totalScore += score;
    averageScoresByYear[year].movieCount += 1;
  });

  
  let bestYear = null;
  let bestAverageScore = -1;

  for (const year in averageScoresByYear) {
    const { totalScore, movieCount } = averageScoresByYear[year];
    const averageScore = totalScore / movieCount;

    if (averageScore > bestAverageScore) {
      bestYear = year;
      bestAverageScore = averageScore;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverageScore.toFixed(2)}`;
}


const bestYearInfo = bestYearAvg(movies);
console.log(bestYearInfo);



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
