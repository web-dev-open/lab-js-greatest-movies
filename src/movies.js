// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  // Use the map method to create an array of directors from the moviesArray
  
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  // Use the filter method to create an array of movies directed by Steven Spielberg
  const spielbergMovies = moviesArray.filter(movie => movie.director === 'Steven Spielberg');

  // Use the filter method again to count only the drama movies
  const dramaMovies = spielbergMovies.filter(movie => movie.genre.includes('Drama'));

  // Return the length of the dramaMovies array
  return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  // Check if the moviesArray is empty and return 0 if it is
  if (moviesArray.length === 0) {
    return 0;
  }

  // Use the reduce method to calculate the sum of all scores
  const totalScore = moviesArray.reduce((acc, movie) => {
    // Check if the score is a number, if not return 0
    if (typeof movie.score === 'number') {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);

  // Calculate the average score and round it to 2 decimal places
  const averageScore = totalScore / moviesArray.length;
  return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  // Filter the moviesArray to get only the drama movies
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

  // Check if there are no drama movies and return 0 if so
  if (dramaMovies.length === 0) {
    return 0;
  }

  // Use the reduce method to calculate the sum of all scores of drama movies
  const totalScore = dramaMovies.reduce((acc, movie) => {
    // Check if the score is a number, if not return 0
    if (typeof movie.score === 'number') {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);

  // Calculate the average score and round it to 2 decimal places
  const averageScore = totalScore / dramaMovies.length;
  return Math.round(averageScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Use the slice method to create a shallow copy of the moviesArray
  const moviesCopy = moviesArray.slice();

  // Use the sort method to sort the movies by year and title
  moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });

  // Return the sorted array
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // Use the map method to create an array of titles from the moviesArray
  const titles = moviesArray.map(movie => movie.title);

  // Use the sort method to sort the titles alphabetically
  titles.sort((a, b) => a.localeCompare(b));

  // Use the slice method to get the first 20 titles
  const first20Titles = titles.slice(0, 20);

  // Return the array of first 20 titles
  return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // Use the map method to create a new array with the duration converted to minutes
  return moviesArray.map(movie => {
    // Use a regular expression to extract the hours and minutes from the duration string
    const durationMatch = movie.duration.match(/(\d+)h\s*(\d+)m/);
    const hours = durationMatch ? parseInt(durationMatch[1]) : 0;
    const minutes = durationMatch ? parseInt(durationMatch[2]) : parseInt(movie.duration.replace('m', '')) || 0;

    // Calculate the total duration in minutes
    const totalMinutes = hours * 60 + minutes;

    // Return a new object with the original movie properties and the updated duration
    return { ...movie, duration: totalMinutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  // Check if the moviesArray is empty and return null if it is
  if (moviesArray.length === 0) {
    return null;
  }

  // Create an object to store the total score and count of movies for each year
  const yearScores = {};

  // Use the forEach method to iterate over the moviesArray
  moviesArray.forEach(movie => {
    const year = movie.year;
    const score = movie.score || 0; // Use 0 if score is not a number

    // If the year is not in the yearScores object, initialize it
    if (!yearScores[year]) {
      yearScores[year] = { totalScore: 0, count: 0 };
    }

    // Update the total score and count for the year
    yearScores[year].totalScore += score;
    yearScores[year].count += 1;
  });

  // Create an array of years and their average scores
  const yearAverages = Object.entries(yearScores).map(([year, { totalScore, count }]) => {
    return { year: parseInt(year), average: totalScore / count };
  });

  // Sort the array by average score (descending) and then by year (ascending)
  yearAverages.sort((a, b) => {
    if (b.average === a.average) {
      return a.year - b.year;
    } else {
      return b.average - a.average;
    }
  });

  // Return the best year and its average score
  return `The best year was ${yearAverages[0].year} with an average score of ${Math.round(yearAverages[0].average * 100) / 100}`;
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
