// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// const movies = require('./data.js')

function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((movie, idx, self) => {
    return movie.director
  })
  const uniqueDirectors = directors.filter((director, idx, self) => {
    return directors.indexOf(director) === idx;
  })
  return uniqueDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if(moviesArray.length === 0){
    return 0;
  }
  const stevenMovies = moviesArray.filter((movie) => {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  })
  return stevenMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(moviesArray.length === 0){
    return 0;
  }
  const movieScores = moviesArray.map(movie => {
    if(!movie.score){
      return 0;
    }else{
      return movie.score
    }
  })
  const sum = movieScores.reduce((sum, score) => {
    return sum + score;
  }, 0)
  const average = sum / moviesArray.length;
  return Math.round(average * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaScores = moviesArray
    .filter(movie => movie.genre.includes("Drama"))
    .map(movie => movie.score);

  if(dramaScores.length === 0){
    return 0;
  }
  const average = dramaScores.reduce((sum, score) => sum + score, 0) / dramaScores.length;

  return Math.round(average * 100) / 100
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesToSort = JSON.parse(JSON.stringify(moviesArray))
  const sortedMovies = moviesToSort.sort((a, b) => {
    if(a.year === b.year){
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      if(a.title === b.title) return 0;
    }else {
      return a.year - b.year;
    }

  })
  return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesToSort = moviesArray.map((movie) => {
    return movie.title
  })

  const sortedMovies = moviesToSort.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
  }).slice(0, 20);
  
  return sortedMovies
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMovies = moviesArray.map(movie => {
    const parts = movie.duration.split(' ')

    let hours = 0;
    let minutes = 0;

    parts.forEach(part => {
      if (part.includes('h')) {
        hours = parseInt(part);
      } else if (part.includes('min')) {
        minutes = parseInt(part);
      }
    })
    return {
      ...movie,
      duration: hours * 60 + minutes
    }
  })
  return newMovies
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  const newArray = moviesArray.reduce((yr, movie) => {

    if (!yr[movie.year]) {
      yr[movie.year] = {
        sum: movie.score,
        count: 1
      }
    } else {
      yr[movie.year].sum += movie.score;
      yr[movie.year].count += 1;
    }
    return yr;
  }, {})
 
  let bestAverage = Object.values(newArray)[0].sum/Object.values(newArray)[0].count;
  let bestYear = Object.keys(newArray)[0];

  Object.entries(newArray).forEach(([year, info]) => {
    const currentYear = Number(year)
    const average = info.sum / info.count

    if (average > bestAverage) {
      bestAverage = average
      bestYear = currentYear;
    }
    if (average === bestAverage && currentYear < bestYear) {
      bestYear = currentYear;
    }
  })
  return `The best year was ${bestYear} with an average score of ${bestAverage}`

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
