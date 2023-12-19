// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// console.log(movies.length)
// movies.forEach(
//   (val)=>{
//     console.log(val.director)
//   }

// )

// function getAllDirectors(moviesArray) { 
 
  


// }
let getAllDirectors = movies.map(
    (movie)=>{
      return movie.director


    }
)
console.log(getAllDirectors)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

let howManyDramaMovies = movies.filter(

  (movie,i )=>{
    let isDarma = false
    for(let i=0;i<movie.genre.length;i++){
      if(movie.genre[i] == 'Drama'){
        isDarma=true
      }
    }

    return movie.director == 'Steven Spielberg' && isDarma 
  }
)
console.log(howManyDramaMovies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

let scores = movies.map(
  (movie)=>{
    return movie.score

  }
)
let sum=0
for(let i=0;i<scores.length;i++){
  sum = sum+scores[i]
}
let avg = sum/scores.length
console.log(avg.toFixed(2))



// Iteration 4: Drama movies - Get the average of Drama Movies
// 
// filter the movies to drama movies
let dramaMoviesArray = movies.filter(

  (movie,i )=>{
    let isDarma = false
    for(let i=0;i<movie.genre.length;i++){
      if(movie.genre[i] == 'Drama'){
        isDarma=true
      }
    }

    return  isDarma && movie.score
  }
)
// console.log(dramaMoviesArray)
// each drama movie score is taken in an array
let dramaScores = dramaMoviesArray.map(
  (movie)=>{
    return movie.score

  }
)
// console.log(dramaScores)
// sum and average of the drama movies
let dramaScoresSum=0
for(let i=0;i<dramaScores.length;i++){
  dramaScoresSum = dramaScoresSum+dramaScores[i]


}
console.log(dramaScoresSum/dramaScores.length)







// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

   return moviesArray.sort((a,b)=>a.year-b.year)
    
   
  
}
console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
let movieTitles = movies.map(
  (movie)=>{
      return movie.title

  }
)
console.log(movieTitles.sort().slice(0,20))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const dura = movie.duration.split(' ');

    let minu = 0;
    for (let t of dura) {
      if (t.includes('h')) {
        minu += parseInt(t) * 60;
      } else {
        minu += parseInt(t);
      }
    }
    return {
      ...movie,
      duration: minu
    };
  });
}
const last = turnHoursToMinutes(movies);
console.log(last);
const last2 = movies.map(m=>m.duration.split(' '))
const minva = parseInt('2h');
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(moviesArray) {}
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const years = [...new Set(moviesArray.map(movie => movie.year))];
  let bestYear = null;

  for (const year of years) {
    const moviesOfYear = moviesArray.filter(movie => movie.year === year);
    const avg = scoresAverage(moviesOfYear);

    if (!bestYear || avg > bestYear.average || (avg === bestYear.average && year < bestYear.year)) {
      bestYear = { year, average: avg };
    }
  }

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
