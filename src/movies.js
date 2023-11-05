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

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



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
