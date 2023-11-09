// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  // Use the map function to extract directors from each movie
  const directors = movies.map(movie => movie.director);

  return directors;
}
const directorsArray = getAllDirectors(movies);

console.log(directorsArray);





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  // Use the filter function to get only Spielberg's drama movies
  const spielbergDramas = movies.filter(movie => 
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );

  // Return the count of Spielberg's drama movies
  return spielbergDramas.length;
}
const spielbergDramaCount = howManyMovies(movies);

console.log(`Steven Spielberg has directed ${spielbergDramaCount} drama movies.`);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  // Use the reduce function to calculate the sum of all scores
  const scoreSum = movies.reduce((sum, movie) => sum + movie.score, 0);

  // Calculate the average score rounded to 2 decimals
  const averageScore = scoreSum / movies.length;
  const roundedAverage = Math.round(averageScore * 100) / 100; // Round to 2 decimals

  return roundedAverage;
}

const averageScore = scoresAverage(movies);

console.log(`The average score of the movies is: ${averageScore}`);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  // Filter the array to include only drama movies
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));

  // Check if there are any drama movies
  if (dramaMovies.length === 0) {
    return "No drama movies found.";
  }

  // Use the reduce function to calculate the sum of scores for drama movies
  const scoreSum = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);

  // Calculate the average score rounded to 2 decimals
  const averageScore = scoreSum / dramaMovies.length;
  const roundedAverage = Math.round(averageScore * 100) / 100; // Round to 2 decimals

  return roundedAverage;
}
const dramaAverageScore = dramaMoviesScore(movies);

console.log(`The average score of drama movies is: ${dramaAverageScore}`);


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}
function orderByYear(movies) {
  // Use the slice method to create a new array and avoid mutating the original
  const sortedMovies = movies.slice();

  // Use the sort method to sort the movies
  sortedMovies.sort((a, b) => {
    // Compare the release years
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      // If the years are the same, compare the titles alphabetically
      return a.title.localeCompare(b.title);
    }
  });

  return sortedMovies;
}
const sortedMovies = orderByYear(movies);

console.log(sortedMovies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // Use the slice method to get the first 20 movies without mutating the original array
  const first20Movies = movies.slice(0, 20);

  // Use the map method to create an array of titles
  const titlesArray = first20Movies.map(movie => movie.title);

  // Use the sort method to alphabetically order the titles
  titlesArray.sort();

  return titlesArray;
}
const first20Titles = orderAlphabetically(movies);

console.log(first20Titles);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  // Use the map method to create a new array without mutating the original array
  const moviesWithMinutes = movies.map(movie => {
    // Extract hours and minutes from the duration string
    const durationArray = movie.duration.split(' ');
    const hours = durationArray[0].includes('h') ? parseInt(durationArray[0]) : 0;
    const minutes = durationArray[1].includes('min') ? parseInt(durationArray[1]) : 0;

    // Calculate the total duration in minutes
    const totalMinutes = hours * 60 + minutes;

    // Create a new object with the updated duration
    return {
      ...movie,
      duration: totalMinutes,
    };
  });

  return moviesWithMinutes;
}
const moviesWithMinutes = turnHoursToMinutes(movies);

console.log(moviesWithMinutes);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
function bestYearAvg(movies) {
  // Create an object to store the total score and count of movies for each year
  const yearStats = {};

  // Iterate through the movies array and update the yearStats object
  movies.forEach(movie => {
    const year = movie.year;
    const score = movie.score;

    if (!yearStats[year]) {
      // If the year is not in the yearStats object, initialize it
      yearStats[year] = { totalScore: score, movieCount: 1 };
    } else {
      // If the year is already in the yearStats object, update the totalScore and movieCount
      yearStats[year].totalScore += score;
      yearStats[year].movieCount++;
    }
  });

  
  let bestYear = null;
  let bestAverageScore = 0;

  for (const year in yearStats) {
    const averageScore = yearStats[year].totalScore / yearStats[year].movieCount;

    if (averageScore > bestAverageScore) {
      bestAverageScore = averageScore;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverageScore.toFixed(2)}`;
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
