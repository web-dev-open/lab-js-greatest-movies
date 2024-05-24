// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  let newDirectors = moviesArray.map(director => director.director);
  let filteredDirectors = newDirectors.filter((item, index) => newDirectors.indexOf(item) === index);
  return filteredDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramaMovies = moviesArray.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) { 
  if (moviesArray.length === 0) {
    return 0;
  }
  const scoresSum = moviesArray.reduce((accumulator, movie) => {
    if (movie.score) {
      return accumulator + movie.score;
    } else {
      return accumulator;
    }
  }, 0);
  const scoresAverage = scoresSum / moviesArray.length;
  return Number(scoresAverage.toFixed(2));
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes('Drama');
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArrayCopy = [...moviesArray];
  moviesArrayCopy.sort((movie1, movie2) => {
    if (movie1.year === movie2.year) {
      return movie1.title.localeCompare(movie2.title);
    } else {
      return movie1.year - movie2.year;
    }
  });
  return moviesArrayCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   const moviesArrayCopy = [...moviesArray];
  moviesArrayCopy.sort((movie1, movie2) => {
    return movie1.title.localeCompare(movie2.title);
  });
  const titlesArray = moviesArrayCopy.map((movie) => {
    return movie.title;
  });
  return titlesArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
  moviesArrayCopy.forEach((movie) => {
    let duration = movie.duration;
    let hours = 0;
    let minutes = 0;
    if (duration.includes('h')) {
      hours = Number(duration.split('h')[0]);
    }
    if (duration.includes('min')) {
      minutes = Number(duration.split('min')[0].split(' ')[1]);
    }
    movie.duration = hours * 60 + minutes;
  });
  return moviesArrayCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  const moviesByYear = {};
  moviesArray.forEach((movie) => {
    if (moviesByYear[movie.year]) {
      moviesByYear[movie.year].push(movie);
    } else {
      moviesByYear[movie.year] = [movie];
    }
  });
  let bestYear = 0;
  let bestAverage = 0;
  for (const year in moviesByYear) {
    const average = scoresAverage(moviesByYear[year]);
    if (average > bestAverage) {
      bestAverage = average;
      bestYear = year;
    }
  }
  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
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
