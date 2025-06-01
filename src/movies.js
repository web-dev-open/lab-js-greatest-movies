// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(movie => movie.director);
  return [...new Set(directors)];

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) return 0;

  const stevenMovies = moviesArray.filter(movie => 
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  );

  return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) return 0;

  const totalScore = moviesArray.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);

  const averageScore = totalScore / moviesArray.length;
  
  return Math.round(averageScore * 100) / 100; // Round to 2 decimals
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) return 0;

  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

  if (dramaMovies.length === 0) return 0;

  const totalDramaScore = dramaMovies.reduce((acc, movie) => {
    return acc + (movie.score || 0);
  }, 0);

  const averageDramaScore = totalDramaScore / dramaMovies.length;

  return Math.round(averageDramaScore * 100) / 100; // Round to 2 decimals
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) return [];

  const sortedMovies = [...moviesArray].sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title); // If years are the same, sort by title
    }
    return a.year - b.year; // Sort by year
  });

  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) return [];

  const sortedTitles = moviesArray
    .map(movie => movie.title)
    .sort((a, b) => a.localeCompare(b)); // Sort titles alphabetically

  return sortedTitles.slice(0, 20); // Return the first 20 titles
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) return [];

  return moviesArray.map(movie => {
    const duration = movie.duration;
    let totalMinutes = 0;

    // Check if duration is a string and contains hours and minutes
    if (typeof duration === 'string') {
      const parts = duration.split(' ');
      parts.forEach(part => {
        if (part.includes('h')) {
          totalMinutes += parseInt(part) * 60; // Convert hours to minutes
        } else if (part.includes('min')) {
          totalMinutes += parseInt(part); // Add minutes directly
        }
      });
    }

    return { ...movie, duration: totalMinutes }; // Return a new object with updated duration
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) return null;

  const yearScores = {};

  // Calculate total scores and counts for each year
  moviesArray.forEach(movie => {
    if (movie.year && movie.score) {
      if (!yearScores[movie.year]) {
        yearScores[movie.year] = { totalScore: 0, count: 0 };
      }
      yearScores[movie.year].totalScore += movie.score;
      yearScores[movie.year].count += 1;
    }
  });

  // Calculate average scores for each year
  const averages = Object.entries(yearScores).map(([year, data]) => {
    return { year: parseInt(year), average: data.totalScore / data.count };
  });

  // Find the year with the highest average score
  const bestYear = averages.reduce((best, current) => {
    if (current.average > best.average) {
      return current;
    } else if (current.average === best.average) {
      return current.year < best.year ? current : best; // If equal, choose the earlier year
    }
    return best;
  }, { year: null, average: -Infinity });

  const avgScore = bestYear.average;
  const formattedScore = Number.isInteger(avgScore) ? avgScore : Number(avgScore.toFixed(1));
  return `The best year was ${bestYear.year} with an average score of ${formattedScore}`;
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
