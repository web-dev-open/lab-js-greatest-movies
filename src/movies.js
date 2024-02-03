// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = []
  moviesArray.map(movie => directors.push(movie.director))
  return [... new Set(directors)]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length < 1) return 0
  
  const filtered = moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  return filtered.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length < 1) return 0

  const sum = moviesArray
                .map(movie => movie.score)
                .reduce((accum, currentScore) => {
                  switch (typeof currentScore) {
                    case 'number':
                      return accum + currentScore
                    default:
                      return accum
                  }
                }, 0)

  const avg = parseFloat((sum / moviesArray.length).toFixed(2))

  return avg
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length < 1) return 0

  const filtered = moviesArray
                .filter(movie => movie.genre.includes('Drama'))

  if (filtered.length < 1) return 0

  const sum = filtered
                .map(movie => movie.score)
                .reduce((accum, currentScore) => {
                  switch (typeof currentScore) {
                    case 'number':
                      return accum + currentScore
                    default:
                      return accum
                  }
                }, 0)

  const avg = parseFloat((sum / filtered.length).toFixed(2))

  return avg
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copy = JSON.parse(JSON.stringify(moviesArray))
  return copy.sort((movieA, movieB) => {
    if (movieA.year < movieB.year) return -1
    if (movieA.year > movieB.year) return 1
    if (movieA.year === movieB.year) {
      if (movieA.title.charCodeAt(0) < movieB.title.charCodeAt(0)) {
        return -1
      }
      else {
        return 1
      }
    }
    return 0
  })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copy = JSON.parse(JSON.stringify(moviesArray))
  const titles = copy.map(movie => movie.title)
  const sorted = titles.sort()
  return sorted.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

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
