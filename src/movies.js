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
    if (elem.director == 'Steven Spielberg' && elem.genre.includes('Drama')) {
      return sum += 1; 
    }
  })
  return sum;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let arr = JSON.parse(JSON.stringify(moviesArray))
  let avg = arr.reduce((sum, elem) => {
    if (elem.score) {
      return sum += elem.score;
    }  
    else {
      return sum;
    }
  },0)
  if (avg) {
    return Number((avg / arr.length).toFixed(2));
  }
  else {
    return 0;
  }
  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let arr = JSON.parse(JSON.stringify(moviesArray))
  let sum = 0;

  let avg = arr.reduce((sum, elem) => {
    if (elem.genre.includes('Drama')) {
      return sum + elem.score;
    }
    else {
      return sum;
    }  
  },0)

  if (avg) {
    let answer =  Number((avg / arr.length).toFixed(2));
    return answer;
  }
  else {
    return 0;
  }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let arr = JSON.parse(JSON.stringify(moviesArray))

  arr.sort((a, b) => {
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
  return arr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let arr = JSON.parse(JSON.stringify(moviesArray))
  let count = 0;

  arr.sort((a, b) => {
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
  return arr.slice(0,20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let hr = 0;
  let min = 0;

  moviesArray.map((elem) => {
    hr += elem.duration.slice(0,1) * 60; 
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
