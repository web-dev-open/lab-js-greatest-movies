// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((elem) => {
     return elem.director
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   return moviesArray.reduce((sum, elem, i) =>{
    if (elem.director == 'Steven Spielberg' && elem.genre[i] == "drama"){
        return sum = sum + 1
    } else {
      return 0
    }
  }, 0)
 }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0){
    return 0
  }
  let total = moviesArray.reduce((sum,elem)=>{
    if (elem.score) {
      return sum + elem.score
    } 
    else {
      return sum
    }
  }, 0)
  let average = total/moviesArray.length
  return Number(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
//   let total = 0
//   for (let i = 0; i < moviesArray.length; i++) {
//     for (let j = 0; j < moviesArray[i].length; j++) {
//       if (moviesArray[i][j] == 'Drama') {
//         total = total + moviesArray[i].score
//       }
//     }
//   } return total/moviesArray.length
// }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let clone = structuredClone(moviesArray)
    clone.sort((a,b) => {
          if (a.year > b.year) {
           return 1
         }
         else if (a.year < b.year) {
           return -1
         }
         else {
           return 0
         }
    })
    return clone
 }


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let clone = structuredClone(moviesArray)
  clone.sort((a, b) =>{
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
})
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
