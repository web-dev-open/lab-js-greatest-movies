// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors=moviesArray.map(direct=>direct.director);
  const uniqueDirectors=directors.filter((dir,index,array)=>array.indexOf(dir)===index)
  return uniqueDirectors;
}
console.log(getAllDirectors(movies));
//Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {     /*i think the solution comes in two steps mainly 1st filter to know no. of steven spielberg's movie then we need to count using reduce
  //step1:filter steven spielberg movies */
  const stevensMovies=moviesArray.filter(movie=>movie.directors==="Steven Spielberg");
  //step3: using reduce count the no of movies also using filter within the reduce to count only drama movies by steven spielberg
  const dramaCount=stevensMovies.reduce((acc,val)=>{
    if( val.genre.filter(dram=>dram==="Drama").length>0) {return acc++} 
    return acc;
  },0);
  return dramaCount;
}
console.log(howManyMovies(movies));
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
console.log(scoresAverage(movies))
function scoresAverage(moviesArray) {
      const totalScore = moviesArray.reduce((sum, movie) => {
        return sum + (movie.score || 0);
    }, 0);

    const averageScore = totalScore / movies.length;
    return Math.round(averageScore,2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
console.log(dramaMoviesScore(movies));
function dramaMoviesScore(moviesArray) {
  const total=moviesArray.filter(movie=>movie.genre.includes('Drama'));
  const dramaScore=total.reduce((acc,val)=>acc+val.score,0);
  return Math.round(dramaScore/moviesArray.length);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
console.log(orderByYear(movies));
function orderByYear(moviesArray) {
  const yearOrder=[...moviesArray].sort((a,b)=>a.year-b.year)
    return yearOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
console.log(orderAlphabetically(movies))
function orderAlphabetically(moviesArray) {          // i am unable to solve this section i tried using chatgpt but it is using functions i havent learned yet 
const orders=moviesArray.title.sort();
return orders
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
/*if (typeof module !== 'undefined') {
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
*/