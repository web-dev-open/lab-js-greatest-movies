// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie=>movie.director)
  .filter((director,index,arr)=>arr.indexOf(director)===index)
}
console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(movie=>movie.director==='Steven Spielberg')
        .map(movie=>movie.title)
}
console.log(howManyMovies(moviesArray))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0; 
  
    const scores = moviesArray.map(movie => movie.score); 
    const totalScore = scores.reduce((sum, score) => sum + score, 0); 
    const averageScore = totalScore / scores.length; 
  
    return Number(averageScore.toFixed(1)); 
  }
  
  console.log(scoresAverage(movies)); 
  


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const album=moviesArray.filter(movie=>movie.genre.includes('Drama'))
  const totalScores=album.reduce((sum,album)=>sum+album.score,0)
  const averageScore=totalScores/album.length
  return Number(averageScore.toFixed(1))
} 
console.log(dramaMovieScore(movies))


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray){
  return moviesArray.sort((a,b)=>{
    if (a.year!==b.year){
      return a.year-b.year
    }
    else{
      return a.title.localeCompare(b.title)
    }
  })
 }
console.log(orderByYear(movies))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray.map(movie=>movie.title)
    .sort((a,b)=>a.localeCompare(b))
    .slice(0,20)
}
console.log(orderAlphbetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const duration = movie.duration;
    let minutes = 0;
    const hoursMatch = duration.match(/(\d+)h/); 
    const minutesMatch = duration.match(/(\d+)min/); 

    if (hoursMatch) minutes += parseInt(hoursMatch[1]) * 60; 
    if (minutesMatch) minutes += parseInt(minutesMatch[1]); 
    return { ...movie, duration: minutes }; 
  });
}
console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null; 
  const yearScores = {};
  moviesArray.forEach(movie => {
    if (!yearScores[movie.year]) {
      yearScores[movie.year] = { totalScore: 0, count: 0 };
    }
    yearScores[movie.year].totalScore += movie.score;
    yearScores[movie.year].count++;
  });

  let bestYear = null;
  let bestAvg = 0;
  for (const year in yearScores) {
    const avgScore = yearScores[year].totalScore / yearScores[year].count;
    if (avgScore > bestAvg || (avgScore === bestAvg && year < bestYear)) {
      bestAvg = avgScore;
      bestYear = year;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAvg.toFixed(1)}`;
}
console.log(bestYearAvg(movies));




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
