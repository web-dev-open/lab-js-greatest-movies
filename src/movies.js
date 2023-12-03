// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data")




function getAllDirectors(moviesArray) {

  let allDirectors = moviesArray.map(movie=>movie.director)

  let cleanArr = allDirectors.filter((item,index,array)=>array.indexOf(item)===index)
 
  return cleanArr
}

// console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  let allMovie = moviesArray.map((movie)=>movie)



return allMovie.filter((item)=>item.director==='Steven Spielberg' && item.genre.includes("Drama")).length
}

// console.log(howManyMovies(movies))
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

if(moviesArray.length===0){
  return 0
}

const sumOfAllScore = moviesArray.reduce((sum,score)=>{
return sum+( score.score || 0)
},0);

const averageScore = sumOfAllScore/moviesArray.length
 
return parseFloat((averageScore).toFixed(2))

}

// console.log(scoresAverage(movies))
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if(moviesArray.length===0){
    return 0
  }
  const dramaMoviesOnly = moviesArray.filter((movie)=>movie.genre.includes("Drama"));

 



return  scoresAverage(dramaMoviesOnly)
}

// console.table(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
if(moviesArray.length===0){
  return 0
}

const sortByYear = moviesArray.sort((a,b)=>{
  if(a.year===b.year){
    return  a.title.localeCompare(b.title)
  }
  else{
   return a.year-b.year
  }
})

return sortByYear
}

// console.log(orderByYear(movies))


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

  let sortAlphabetically = [...moviesArray].sort((a,b)=>a.title.localeCompare(b.title));

  let movieTitleOnly = sortAlphabetically.map((movie)=>movie.title);


  return movieTitleOnly.slice(0,20)
}

// console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let movieCopy = JSON.parse(JSON.stringify(moviesArray));
  let movieWithMinutes = movieCopy.map((movie)=>{
    let duration = movie.duration;
    let hour = 0;
    let minutes = 0;
    if(duration.includes('h')){
      hour = Number(duration.split('h')[0])
    }

    if(duration.includes('min')){
      minutes = Number(duration.split(' ')[1].split('min')[0])
    }

    movie.duration = hour*60+minutes;

    return movie;

  })

  

  return movieWithMinutes;

}

// console.log(turnHoursToMinutes(movies))

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

  if(moviesArray.length===0){
    return null;
  }


  let yearData = {};

  moviesArray.forEach(movie=> {
    const year = movie.year;
    const score = movie.score;

    yearData[year] = yearData[year] || {totalScore:0,count:0};
    yearData[year].totalScore  += score;
    yearData[year].count++
  });

  let bestYear  = 0;
  let bestAverage = 0;

  for(const year in yearData){
    const average = yearData[year].totalScore/yearData[year].count;

    if(average>bestAverage){
      bestYear = year;
      bestAverage = average;
    }
  }
 

  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
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
