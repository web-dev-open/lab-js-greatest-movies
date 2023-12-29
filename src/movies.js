// Iteration 1: All directors
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// Bonus - Iteration 1.1: Clean the array of directors
function cleanDirectorsArray(directorsArray) {
  return Array.from(new Set(directorsArray));
}

// Iteration 2: Steven Spielberg. The best?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average
function scoresAverage(moviesArray) {
  const moviesWithScores = moviesArray.filter((movie) => typeof movie.score === 'number' && !isNaN(movie.score));
  
  if (moviesWithScores.length === 0) return 0;

  const totalScore = moviesWithScores.reduce((acc, movie) => acc + movie.score, 0);
  const averageScore = totalScore / moviesWithScores.length;

  return parseFloat(averageScore.toFixed(2));
}



// Iteration 4: Drama movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes('Drama')
  );

  return scoresAverage(dramaMovies);
}

// Iteration 5: Order by year
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic order
function orderAlphabetically(moviesArray) {
  const titlesArray = moviesArray.map((movie) => movie.title);
  const sortedTitles = titlesArray.sort((a, b) => a.localeCompare(b));

  return sortedTitles.slice(0, 20);
}

// Bonus - Iteration 7: Time format
function turnHoursToMinutes(moviesArray) {
  const updatedMovies = moviesArray.map((movie) => {
    const duration = movie.duration.split(' ');
    let totalMinutes = 0;

    for (const time of duration) {
      if (time.includes('h')) {
        totalMinutes += parseInt(time) * 60;
      } else if (time.includes('min')) {
        totalMinutes += parseInt(time);
      }
    }

    return { ...movie, duration: totalMinutes };
  });

  return updatedMovies;
}

// Bonus - Iteration 8: Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const years = Array.from(new Set(moviesArray.map((movie) => movie.year)));
  let bestYear = null;
  let bestAverage = 0;

  for (const year of years) {
    const moviesOfYear = moviesArray.filter((movie) => movie.year === year);
    const average = scoresAverage(moviesOfYear);

    if (average > bestAverage || (average === bestAverage && year < bestYear)) {
      bestYear = year;
      bestAverage = average;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}

// Exporting functions for testing
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    cleanDirectorsArray,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
