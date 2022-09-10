// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map((elem) => {
    return elem.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  } else {
    let spielbergMovies = moviesArray.filter((elem) => {
      return (
        elem.director == 'Steven Spielberg' && elem.genre.includes('Drama')
      );
    });
    return spielbergMovies.length;
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  } else {
    let total = moviesArray.reduce((acc, elem) => {
      if (elem.score) {
        return acc + elem.score;
      } else {
        return acc;
      }
    }, 0);
    let average = Number((total / moviesArray.length).toFixed(2));
    return average;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  } else {
    let dramaMovies = moviesArray.filter((elem) => {
      return elem.genre.includes('Drama');
    });
    let total = dramaMovies.reduce((acc, elem) => {
      if (elem.score) {
        return acc + elem.score;
      } else {
        return acc;
      }
    }, 0);
    let average = Number((total / dramaMovies.length).toFixed(2));
    return average;
  }
}
//let cloneArr = JSON.parse(JSON.stringify(movies));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let cloneArr = JSON.parse(JSON.stringify(moviesArray));
  cloneArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1; // if sorting in ascending order
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1; // ititlef sorting in ascending order
      } else if (a.title < b.title) {
        return -1;
      }
    }
  });
  return cloneArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let cloneArr = JSON.parse(JSON.stringify(movies));
  if (cloneArr.length < 20) {
    return cloneArr;
  } else {
    cloneArr.sort((a, b) => {
      if (a.title > b.title) {
        return 1; // if sorting in ascending order
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    });

    let result = cloneArr.splice(0, 20);
    let titleMovies = result.map((elem) => {
      return elem.title;
    });

    //console.log(titleMovies);
    return titleMovies;
  }
}
//orderAlphabetically(movies);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

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
    bestYearAvg
  };
}
