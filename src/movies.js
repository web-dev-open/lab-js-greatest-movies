const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//  
let getAllDirectors = movies.map((movies) => {
   return movies.director
   
})
console.log(getAllDirectors);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
let howManyMovies2 = [] 
let howManyMovies = movies.filter((movies) => {
     return movies.director = 'Steven Spielberg' 
 })
 console.log(howManyMovies);

 

 

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let sum = 0;
    for (let i = 0; i < moviesArray.length; i++) {
        sum += moviesArray[i].score;
    }
    return sum / moviesArray.length;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < moviesArray.length; i++) {
        if (moviesArray[i].genre.includes('Drama')) {
            sum += moviesArray[i].score;
            count++;
        }
    }
    return sum / count;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.sort((a, b) => a.year - b.year);

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 20);

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((movie) => {
        const [hours, minutes] = movie.duration.split('h').map(Number);
        movie.duration = hours * 60 + minutes;
        return movie;
    });

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const years = new Set(moviesArray.map((movie) => movie.year));
    const yearlyAverages = {};
    for (const year of years) {
        const moviesInYear = moviesArray.filter((movie) => movie.year === year);
        yearlyAverages[year] = scoresAverage(moviesInYear);
    }
    const bestYear = Math.max(...Object.keys(yearlyAverages));
    return yearlyAverages[bestYear];

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
