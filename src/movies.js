// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movies)=>movies.director);
}

console.log(getAllDirectors(movies));


function cleanDirectorsArray(movies) {

  const uniqueDirectors = new Set(movies.map(movie => movie.director));

  const cleanedDirectorsArray = [...uniqueDirectors];

  return cleanedDirectorsArray;
}
console.log(cleanDirectorsArray(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.director === "Steven Spielberg");
}
console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.lenth === 0) {
    return 0;
  }
  const sumAll = movies.reduce((sum, movies) => {
    return sum + (movies.score || 0);
  },0);

  const average = sumAll / movies.length;
  return Math.round(average * 100) /100;
}

console.log(scoresAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));

  if (dramaMovies.length === 0) {
    return 0;
  }

  const sumOfScores = dramaMovies.reduce((sum, movie) => {
    return sum + (movie.score || 0); 
  }, 0);

  const averageScore = sumOfScores / dramaMovies.length;
  return Math.round(averageScore * 100) / 100; // Round to 2 decimals

}
console.log(dramaMoviesScore(movies));


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; // Sort by year in ascending order
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return sortedMovies;
}
console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedTitles = [...moviesArray]
    .sort((a, b) => a.title.localeCompare(b.title)) // Sort by title alphabetically
    .slice(0, 20) // Take the first 20 movies
    .map(movie => movie.title); 

  return sortedTitles;
}
console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesWithMinutes = moviesArray.map(movie => {
   
    const [hours, minutes] = movie.duration.match(/\d+/g).map(Number);

    const totalMinutes = hours * 60 + minutes;

    return { ...movie, duration: totalMinutes };
  });

  return moviesWithMinutes;
}
console.log(turnHoursToMinutes(movies));


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  const averageScoresByYear = {};

  movies.forEach(movie => {
    const year = movie.year;
    const score = movie.score || 0; 

    if (!averageScoresByYear[year]) {
      averageScoresByYear[year] = { totalScore: 0, movieCount: 0 };
    }

    averageScoresByYear[year].totalScore += score;
    averageScoresByYear[year].movieCount++;
  });

  const averages = Object.entries(averageScoresByYear).map(([year, data]) => ({
    year: parseInt(year),
    averageScore: data.totalScore / data.movieCount,
  }));

  const bestYear = averages.reduce((best, current) => {
    return current.averageScore > best.averageScore ? current : best;
  });

  return `The best year was ${bestYear.year} with an average score of ${bestYear.averageScore.toFixed(2)}`;
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
    bestYearAvg,
  };
}
