// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors0(moviesArray) {
  return moviesArray.map(movie => movie.director)
}

function getAllDirectors(moviesArray) {
  return Array.from(new Set(moviesArray.map(movie => movie.director)))
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const newMovies =  moviesArray.filter(movie => {
    return (
      movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    );
  });
  return newMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if( moviesArray.length === 0) return 0
  const totalScore = moviesArray.reduce((sum, movie) => 
    sum + (movie.score || 0),0)

  const averageScore = totalScore/moviesArray.length
  return parseFloat(averageScore.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'))
  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray]  
  return sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year; // Sort by year in ascending order
    } else {
      return a.title.localeCompare(b.title);
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedTitles = moviesArray
  .map(movie => movie.title)
  .sort((a, b) => a.localeCompare(b))
  
  return sortedTitles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const modifiedMovies = moviesArray.map(movie => {
    const hours = parseInt(movie.duration.match(/\d+h/));
    const minutes = parseInt(movie.duration.match(/\d+min/));

    const totalMinutes = (hours || 0) * 60 + (minutes || 0);

    return {
      ...movie,
      duration: totalMinutes,
    };
  });

  return modifiedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null; 
  }

  const yearScores = {};

  moviesArray.forEach(movie => {
    const year = movie.year;
    const score = movie.score;

    if (yearScores[year]) {
      yearScores[year].scores.push(score);
    } else {
      yearScores[year] = { scores: [score] };
    }
  });

  let bestYear = null;
  let bestAverageScore = -1;

  for (const year in yearScores) {
    const scores = yearScores[year].scores;
    const averageScore = scores.reduce((total, score) => total + score, 0) / scores.length;

    if (averageScore > bestAverageScore) {
      bestYear = year;
      bestAverageScore = averageScore;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverageScore}`;
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
