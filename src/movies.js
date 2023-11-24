// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie) => {
    return movie.director;
  });
  return directors.filter((director, index) => {
    return directors.indexOf(director) === index;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movie) => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const average =
    moviesArray.reduce((acc, movie) => {
      if (movie.score) {
        return acc + movie.score;
      } else {
        return acc;
      }
    }, 0) / moviesArray.length;
  return Number(average.toFixed(2));
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
  const moviesCopy = [...moviesArray];
  moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesCopy = [...moviesArray];
  moviesCopy.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
  const titles = moviesCopy.map((movie) => {
    return movie.title;
  });
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesCopy = JSON.parse(JSON.stringify(moviesArray));
  const moviesWithMinutes = moviesCopy.map((movie) => {
    let duration = movie.duration;
    let hours = 0;
    let minutes = 0;
    if (duration.includes('h')) {
      hours = Number(duration.split('h')[0]);
    }
    if (duration.includes('min')) {
      minutes = Number(duration.split(' ')[1].split('min')[0]);
    }
    movie.duration = hours * 60 + minutes;
    return movie;
  });
  return moviesWithMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  const moviesCopy = [...moviesArray];

  // Sort movies by year
  moviesCopy.sort((a, b) => a.year - b.year);

  // Extract unique years
  const uniqueYears = [...new Set(moviesCopy.map((movie) => movie.year))];

  // Calculate averages for each unique year
  const averages = uniqueYears.map((year) => {
    const moviesOfYear = moviesCopy.filter((movie) => movie.year === year);
    return scoresAverage(moviesOfYear);
  });

  // Find the maximum average
  const maxAverage = Math.max(...averages);

  // Find the oldest year among the years with the maximum average score
  const bestYear = uniqueYears.find((year) => {
    const moviesOfYear = moviesCopy.filter((movie) => movie.year === year);
    return scoresAverage(moviesOfYear) === maxAverage;
  });

  return `The best year was ${bestYear} with an average score of ${maxAverage}`;
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
