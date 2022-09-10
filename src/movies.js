// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((elem) => {
    return elem.director;
  })
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let sum = 0;
  let directors = moviesArray.map((elem) => {
    if (elem.director == 'Steven Spielberg') {
      return sum += 1; 
    }
  })
  return sum;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  // let arr = structuredClone(moviesArray);
  let avg = moviesArray.reduce((sum, elem) => {
      return sum += elem.score;
  },0)

  if (sum > 0) {
    return (sum / moviesArray.length).toFixed(2);
  }
  else {
    return 0
  }
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // let arr = structuredClone(moviesArray);
  moviesArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } 
    else if (a.year < b.year) {
      return -1;
    }
    else {
      return 0;
    }
  })
  return moviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  // let arr = structuredClone(moviesArray);
  let count = 0;

  moviesArray.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } 
    else if (a.title < b.title) {
      return -1;
    }
    else {
      return 0;
    }
  })
  return moviesArray.slice(0,19);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let hr = 0;
  let min = 0;

  moviesArray.map((elem) => {
    hr += elem.duration.slice(0,1) * 60; 
    console.log(hr )
    min = elem.duration.slice(3,5) + hr;
    elem.duration = min;
  })
  return min;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



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
