// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray ){

  const directors = moviesArray.map(function (movies)
  {
    return movies.director
  });
  const uniqueDirectors = [...new Set(directors)];

  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  let count=0
  moviesArray.forEach(function(movie) {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
      count++;
    }
  });

  return count;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const totalScore=moviesArray.reduce(function (sum,movies)
  {
    return sum+(movies.score || 0);
  },0);
  const avg= totalScore/moviesArray.length;
  return parseFloat(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function(movie) {
    return movie.genre.includes("Drama");
  });

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  sortedMovies = JSON.parse(JSON.stringify(moviesArray)) 
  return sortedMovies.sort(function (a,b)
  {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);

  } );

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
  const first20Titles = sortedMovies.slice(0, 20);

  const result = first20Titles.map(movie => movie.title);
  return result;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const updatedMovies = moviesArray.map(function(movie) {
    const [hours=0, minutes=0] = movie.duration.split(' ');

    const hoursInMinutes = parseInt(hours) * 60;
    const totalMinutes = hoursInMinutes + parseInt(minutes);

    return {
      ...movie,
      duration: totalMinutes
    };
  });

  return updatedMovies;

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  const yearlyAverages = {};

  moviesArray.forEach(({ year, score }) => {
    yearlyAverages[year] = yearlyAverages[year] || { sum: 0, count: 0 };
    yearlyAverages[year].sum += score;
    yearlyAverages[year].count++;
  });

  let bestYear = null;
  let bestAverage = -Infinity;

  for (const year in yearlyAverages) {
    const average = yearlyAverages[year].sum / yearlyAverages[year].count;

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
