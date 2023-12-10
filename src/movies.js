import { movies } from "./data.js";
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const newMovies = movies;
// console.log(newMovies);

function getAllDirectors(moviesArray) {
  moviesArray = newMovies;
  let newDirectors = moviesArray.map(director => director.director);
  let filteredDirectors = newDirectors.filter((item, index) => newDirectors.indexOf(item) === index);
  return filteredDirectors;

}
// console.log(getAllDirectors());
// 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  moviesArray = newMovies;
  let mydirector = moviesArray.filter(director => director.director === "Steven Spielberg" && director.genre.includes('Drama'));

  return mydirector.length
}
// Usage example:
const spielbergDramaCount = howManyMovies();
// console.log(`Steven Spielberg directed ${spielbergDramaCount} drama movies.`);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  moviesArray = newMovies;
  const scores = moviesArray.reduce(function (acc, currentValue) {
    return acc + currentValue.score
  }, 0);

  return Number(scores / moviesArray.length).toFixed(2);
}  

// console.log(scoresAverage());


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  moviesArray = newMovies;
  let mydirector = moviesArray.filter(drama => drama.score && drama.genre.includes('Drama'));
  const scores = mydirector.reduce(function(acc, curr){
    return acc + curr.score;
  }, 0);

  return Number(scores / mydirector.length).toFixed(2);
}
// console.log(dramaMoviesScore());


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  moviesArray = newMovies;
  let myYear = moviesArray.map(years => years.year)
  return myYear.sort((a, b) => a -b);
}

// console.log(orderByYear());

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  moviesArray = newMovies;
  // Sort movies by title alphabetically
  moviesArray.sort((a, b) => a.title.localeCompare(b.title));

  // Extract titles of the first 20 movies or all titles if less than 20
  const titles = moviesArray.slice(0, 20).map(movie => movie.title);

  return titles;
}
// console.log(orderAlphabetically());


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  moviesArray = newMovies;
  // Create a new array to avoid modifying the original array
  const modifiedMovies = moviesArray.map(movie => {
    // Create a copy of the movie object
    const newMovie = { ...movie };

    // Extract hours and minutes from the duration string
    const durationArr = newMovie.duration.split(' ');

    // Calculate total duration in minutes
    let totalDuration = 0;
    for (let i = 0; i < durationArr.length; i++) {
      if (durationArr[i].includes('h')) {
        totalDuration += parseInt(durationArr[i]) * 60; // Convert hours to minutes
      } else if (durationArr[i].includes('min')) {
        totalDuration += parseInt(durationArr[i]); // Add minutes
      }
    }

    // Update duration in the new movie object
    newMovie.duration = totalDuration;

    return newMovie;
  });

  return modifiedMovies;
}

// console.log(turnHoursToMinutes());

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  moviesArray = newMovies;
  if (moviesArray.length === 0) {
    return 'The movie list is empty.';
  }

  // Create an object to store total scores and count of movies for each year
  const scoreByYear = {};

  // Calculate total scores and count of movies for each year
  moviesArray.forEach(movie => {
    if (scoreByYear[movie.year]) {
      scoreByYear[movie.year].totalScore += movie.score;
      scoreByYear[movie.year].movieCount++;
    } else {
      scoreByYear[movie.year] = {
        totalScore: movie.score,
        movieCount: 1
      };
    }
  });

  let bestYear = 0;
  let bestAvg = 0;

  // Calculate average score for each year and find the year with the best average
  for (const year in scoreByYear) {
    const avgScore = scoreByYear[year].totalScore / scoreByYear[year].movieCount;
    if (avgScore > bestAvg) {
      bestAvg = avgScore;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(2)}`;
}
console.log(bestYearAvg());


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
