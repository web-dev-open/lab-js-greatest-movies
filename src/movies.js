// First of all let's import the data
const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

console.log(`\nIteration 1: All directors`)

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(movie => movie.director);

  // Bonus - Iteration 1.1: Clean the array of directors
  const uniqueDirectors = [... new Set(directors)];
  return uniqueDirectors;
}

// Showing the result. I am using JSON to give some format to the array
console.log(`\n   The directors of the 250 most famous movies are: ${JSON.stringify(getAllDirectors(movies), null, 2)}`);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

console.log("\nIteration 2: Steven Spielberg. The best?");

function howManyMovies(moviesArray) {

  // Create a variable to keep Spielberg movies
  const spielberg = moviesArray.filter(movie => movie.director === "Steven Spielberg");

  // Create a variable to count the Drama Movies
  const dramaCount = spielberg.filter(movie => movie.genre.includes("Drama")).length;

  // return the counter
  return dramaCount;
}

// Print the result.
console.log(`\n   Steven Spielberg has been directed ${howManyMovies(movies)} drama movies which are in the top of 250 greatest movies of all the time`)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

console.log("\nIteration 3: All scores average.")

function scoresAverage(moviesArray) {

  // Save the average on an array
  const average = moviesArray.reduce((score, movies) => score + movies.score, 0) / moviesArray.length;

  // Return the value with 2 decimals
  return average.toFixed(2);

}

// Printing out the result
console.log(`\n   The average Score of the 250 best movies is ${scoresAverage(movies)}. Pretty good!`);

// Iteration 4: Drama movies - Get the average of Drama Movies

console.log("\nIteration 4: Drama movies.");

function dramaMoviesScore(moviesArray) {

  // First we filter the information and save it into a variable
  const dramaMovies = moviesArray.filter(movies => movies.genre.includes("Drama"));

  // We save the average on a variable
  const dramaAvgr = dramaMovies.reduce((drama, movies) => drama + movies.score, 0) / dramaMovies.length;

  // Return the average with 2 decimals.
  return dramaAvgr.toFixed(2);
}

// Print the result:
console.log(`\n   The average score of Drama Movies is: ${dramaMoviesScore(movies)}`);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

console.log("\nIteration 5: Order by year");

function orderByYear(moviesArray) {

  // Create a copy of the array to avoid the mutation since we're using sort.
  const sortedMovies = [... moviesArray];

  // Sorting the movies in Ascending order
  sortedMovies.sort((a, b) => {
    if(a.year !== b.year) {

      // Sorting by year ascending
      return a.year - b.year 
    } else {
      
      // If there are same years then sort alphabetical
      return a.title.localeCompare(b.title);
    }
  });
  
  // Returning the value
  return sortedMovies;
}

// Printing the result. Using Stringify in order to show the array
console.log(`\n   The 250 most famous movies of all the time sorted by year are: ${JSON.stringify(orderByYear(movies), null, 2)}`);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles.

console.log("Iteration 6: Alphabetic order");

function orderAlphabetically(moviesArray) {

  // Create a new array with spread to avoid mutation since we're using sort.
  const sortedMovies = [... moviesArray];

  // Now we're sorting the movies by title and aphabetical
  sortedMovies.sort((a, b) => a.title.localeCompare(b.title));

  // Slice the first 20 movies
  const topMovies = sortedMovies.slice(0, 20);

  // return the Top 20 Movies.
  return topMovies;
}

// Showing the result using Stringify.
console.log(`\n   The first 20 movies in alphabetical order are: ${JSON.stringify(orderAlphabetically(movies), null, 2)}`);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

console.log("\nBONUS - Iteration 7: Time format");

function turnHoursToMinutes(moviesArray) {

  // Create and initialice an array to store the minutes
  const convertion = moviesArray.map(movie => {

    // Lets create a variable to store them movie length
    const [hours1, minutes1] = movie.duration.split("h ");

    // If there is any error we can handle telling the code to take 0 with the or operator
    const hours2 = parseInt(hours1) || 0;
    const minutes2 = parseInt(minutes1) || 0;

    // Convert total duration to minutes
    const toMinutes = hours2 * 60 + minutes2;

  // Return the object with the new value
    return {
      
      // spread the aray to avoid mutation
      ...movie,

      // convert the hours and minutes to just minutes
      duration: toMinutes
    };
  });

  // Returnning the new data
  return convertion;
}

// Showing the result
console.log(`\n   The hour and minute convertion array is: ${JSON.stringify(turnHoursToMinutes(movies), null, 2)}`);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

console.log("\nBONUS - Iteration 8: Best yearly score average")

function bestYearAvg(moviesArray) {
  
  // Create a new copy of the array with spread 
  const bestYearMovies = moviesArray.map(movie => ({...movie}));

  // Check if the array is empty
  if(bestYearMovies.length === 0) {
    return "No movies found"; 
  }

  // Create and empty object to store the scores
  const yearAvg = {};

   // Iteraction through the movies to calculate the total score
  bestYearMovies.forEach(movie => {
    
    // Check if the year already exist in yearScore variable
    if(yearAvg[movie.year]) {

      // Already exists, update total score and count
      yearAvg[movie.year].totalScore += movie.score;
      yearAvg[movie.year].movieCount++;

      // Calculate new average score
      yearAvg[movie.year].avgScore = 
        yearAvg[movie.year].totalScore / yearAvg[movie.year].movieCount;

    } else {

      // If the year doesn't exist. Create a new entry
      yearAvg[movie.year] = {
        totalScore: movie.score,
        movieCount: 1,
        avgScore: movie.score
      };
    }
  });

  // Find year with max average
  let bestYear = "";
  let bestAvgScore = 0;

  // Now it is turn to Calculate the average score with for each. Then find the best year.
  for(const year in yearAvg) {
    
    // If the avg score is higher:
    if(yearAvg[year].avgScore > bestAvgScore) {

      // If true update bestYear and bestAvgScore
      bestYear = year;
      bestAvgScore = yearAvg[year].avgScore;
    }
  }

  // Return the result in a string.
  return `The best year of the ${bestYearMovies.length} movies was ${bestYear} with an average score of ${bestAvgScore.toFixed(2)}`;
}

// Print the result
console.log(`\n   ${bestYearAvg(movies)}`)

console.log("\n");

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
