// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
 const dir= moviesArray.map((movie)=>{
    return movie.director;
 });
 return [...new Set(dir)]; 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  return movies.filter(movie => 
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;
  
  const totalScore = moviesArray.reduce((sum, movie) => {
    return sum + (movie.score || 0);
  }, 0);
  
  const averageScore = totalScore / moviesArray.length;
  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  if (dramaMovies.length === 0) return 0;
  
  const totalScore = dramaMovies.reduce((sum, movie) => {
    return sum + (movie.score || 0);
  }, 0);
  
  const averageScore = totalScore / dramaMovies.length;
  return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  // Create a copy of the array to avoid mutating the original array
  const moviesCopy = [...movies];
  
  // Sort the copied array
  moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      // If the years are the same, sort by title
      return a.title.localeCompare(b.title);
    }
    // Otherwise, sort by year
    return a.year - b.year;
  });
  
  return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  // Map to get only the titles
  const titles = movies.map(movie => movie.title);
  
  // Sort the titles alphabetically
  titles.sort((a, b) => a.localeCompare(b));
  
  // Return the first 20 titles, or all if less than 20
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return movies.map(movie => {
    const duration = movie.duration.split(' ');
    let minutes = 0;

    for (let time of duration) {
      if (time.includes('h')) {
        minutes += parseInt(time) * 60;
      }
      if (time.includes('min')) {
        minutes += parseInt(time);
      }
    }

    return { ...movie, duration: minutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  if (movies.length === 0) return null;

  const scoresByYear = {};

  // Populate the scores by year
  movies.forEach(movie => {
    const year = movie.year;
    const score = movie.score;

    if (!scoresByYear[year]) {
      scoresByYear[year] = { sum: 0, count: 0 };
    }

    scoresByYear[year].sum += score;
    scoresByYear[year].count += 1;
  });

  // Calculate the average scores and find the best year
  let bestYear = null;
  let bestAvg = 0;

  for (const year in scoresByYear) {
    const { sum, count } = scoresByYear[year];
    const avg = sum / count;

    if (avg > bestAvg || (avg === bestAvg && year < bestYear)) {
      bestAvg = avg;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(1)}`;
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
