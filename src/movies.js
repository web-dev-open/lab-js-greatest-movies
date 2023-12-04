// Iteration 1: All directors
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg. The best?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: All scores average
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const totalScores = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0);
  const average = totalScores / moviesArray.length;

  return parseFloat(average.toFixed(2));
}

// Iteration 4: Drama movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year
function orderByYear(moviesArray) {
  return moviesArray.slice().sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order
function orderAlphabetically(moviesArray) {
  const sortedTitles = moviesArray.map(movie => movie.title).sort();
  return sortedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format
function turnHoursToMinutes(moviesArray) {
  const formattedMovies = moviesArray.map(movie => {
    const durationParts = movie.duration.split(' ');
    let totalMinutes = 0;

    durationParts.forEach(part => {
      if (part.includes('h')) {
        totalMinutes += parseInt(part) * 60;
      } else if (part.includes('min')) {
        totalMinutes += parseInt(part);
      }
    });

    return { ...movie, duration: totalMinutes };
  });

  return formattedMovies;
}

// BONUS - Iteration 8: Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const years = Array.from(new Set(moviesArray.map(movie => movie.year)));

  const averageScores = years.map(year => {
    const moviesOfYear = moviesArray.filter(movie => movie.year === year);
    const average = scoresAverage(moviesOfYear);
    return { year, average };
  });

  const bestYear = averageScores.reduce((best, current) => {
    if (current.average > best.average || (current.average === best.average && current.year < best.year)) {
      return current;
    }
    return best;
  });

  return `The best year was ${bestYear.year} with an average score of ${bestYear.average}`;
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
