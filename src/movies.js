// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((elem) => {
    return elem.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  result = [];
  let ans = moviesArray.filter((ele) => {
    return ele.director == 'Steven Spielberg';
  });
  ans.forEach((ele) => {
    for (let i = 0; i < ele.genre.length; i++) {
      if (ele.genre[i] == 'Drama') {
        result.push(ele);
        break;
      }
    }
  });
  return result.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let totalScore = moviesArray.reduce((sum, ele) => {
    if (ele.score) {
      return sum + ele.score;
    } else {
      return sum;
    }
  }, 0);
  let avg = totalScore / moviesArray.length;
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) => {
    for (let i of movie.genre) {
      if (i === 'Drama') {
        return true;
      }
    }
    return false;
  });
  let totalScore = dramaMovies.reduce((sum, movie) => {
    if (movie.score) {
      return sum + movie.score;
    } else {
      return sum;
    }
  }, 0);
  return Number((totalScore / dramaMovies.length).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let clonedArray = moviesArray.slice();
  clonedArray.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else return 0;
    }
  });
  return clonedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let clonedArray = moviesArray.slice();
  clonedArray.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else return 0;
  });
  let twentyEle = clonedArray.slice(0, 20);

  let output = twentyEle.map((ele) => {
    return ele.title;
  });
  return output;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
// function turnHoursToMinutes(moviesArray) {
//   let clonedArray = moviesArray.slice();
//   let ans = clonedArray.map((ele) => {
//     let spaceStr = ele.duration.split(' ');
//     let hours = Number(spaceStr[0].split('h')[0]);
//     let mins = Number(spaceStr[1].split('min')[0]);

//     let total = hours * 60 + mins;
//     ele.duration = total;
//     return ele;
//   });

//   console.log(ans);
// }

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
