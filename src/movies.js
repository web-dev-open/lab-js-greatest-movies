// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const dir = movies.map((i) => {
    return i.director;
  });
  return dir;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const howmany = movies.filter((i) => {
    return i.director==="Steven Spielberg"
  });
  return howmany;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const avgsc = movies.reduce((acc,i)=> {
      acc=acc+i.score
      return acc;
  },0);
  return avgsc/movies.length;
}
//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const flt = movies.filter((i)=> {
    return i.genre.includes("Drama");
  });
  const avgsc = flt.reduce((acc,i) => {
    return acc+i.score
  },0);
  return avgsc/flt.length;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedmovies = movies.sort((a,b) => {
    if (a.year !== b.year) {
      return a.year-b.year;
    }
    else {
      if (a.title<b.title) {
        return -1;
      }
      else if (a.title > b.title) {
        return 1;
      }
      else {
        return 0;
      }
    }
  });
  return sortedmovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sorttitle = movies.sort((a,b) => {
    if (a.title<b.title) {
      return -1;
    }
    else if (a.title > b.title) {
      return 1;
    }
    else {
      return 0;
    }
  });
  if (sorttitle.length<20) {
    return sorttile.map(i=>i.title);
  }
  else {
    const first20 = sorttitle.slice(0,20).map(i=>i.title);
    return first20;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  /* const dur = movies.map(i => i.duration);
  return dur; */
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
