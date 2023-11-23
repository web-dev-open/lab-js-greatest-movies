// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const getAllDirectors=moviesArray.map(movie => movie.director);
  return getAllDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenSpielberg = moviesArray.filter(movie => movie.director ==='Steven Spielberg' && movie.genre.includes('Drama'));
  return stevenSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   const totalScore = moviesArray.reduce((sum,movie) => {
    return typeof movie.score === 'number' ? sum + movie.score : sum;
  }, 0);
  const averageScores = totalScore / movies.length;
  return parseFloat(averageScores.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

  if(dramaMovies.length === 0)
    return 0;

  const totalScore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
  const averageScore = totalScore / dramaMovies.length;
  return parseFloat(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Create a new array with a shallow copy of the original movies
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => {
    // Compare movies by release year
    if(a.year !== b.year) {
      return a.year - b.year;
    }

    // If the years are the same, compare movies by title
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray]; // Create shallow copy of original array
  sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

  const first20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);
  return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const updatedMovies = moviesArray.map(movie => {
    const duration = movie.duration;
    const hoursIndex = duration.indexOf('h');
    const minutesIndex = duration.indexOf('min');

    // Extract hours and minutes from the duration string
    const hours = hoursIndex !== -1 ? parseInt(duration.slice(0, hoursIndex)) : 0;
    const minutes = minutesIndex !== -1 ? parseInt(duration.slice(hoursIndex + 1, minutesIndex)) : 0;

    // Calculate the total duration in minutes
    const totalMinutes = (hours * 60) + minutes;

    // Create a new object with the updtaed duration and the rest of the movie details
    return {
      ...movie,
      duration: totalMinutes
    };
  });

  return updatedMovies;  
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  // Create an object to store total scores and count of movies each year
    const yearData = {};

    // Iterate through the movies and calculate the total scores and counts for each year
    moviesArray.forEach(movie => {
      const year = movie.year;
      const score = movie.score;
      yearData[year] = yearData[year] || {totalScore: 0, count: 0};
      yearData[year].totalScore += score;
      yearData[year].count++;
    });

    // Calculate the average score for each year
    let bestYear = 0;
    let bestAverage = 0;

    for(const year in yearData) {
      const average = yearData[year].totalScore / yearData[year].count;

      if(average > bestAverage) {
        bestYear = year;
        bestAverage = average;
      }
    }
    return `The best year was ${bestYear} with an average score of ${bestAverage}`;
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
