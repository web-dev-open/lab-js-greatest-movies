import movies from './data.js';
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  //use map function to extract directors from each movie

   const directorsArray = moviesArray.map(movie => movie.director);

   return directorsArray;

}
//calling function with the sample array
const allDirectors = getAllDirectors(movies);

console.log(allDirectors);
//bonus 1.1 
function getAllDirectors2(moviesArray) {
  // Use Set to automatically remove duplicates
  const uniqueDirectorsSet = new Set(moviesArray.map(movie => movie.director));

  // Convert Set back to an array
  const uniqueDirectorsArray = [...uniqueDirectorsSet];

  return uniqueDirectorsArray;
}

// Calling function with the imported array
const uniqueDirectors = getAllDirectors2(movies);

console.log(uniqueDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  //use of filter to select only the drama movies
  const spielbergDramaMovies = moviesArray.filter(movie =>
    movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));

    //return count of the drama movies by Spielberg
    return spielbergDramaMovies.length;
}

//calling the function with imported array
const spielbergDramaCount = howManyMovies(movies);

console.log(`Steven Spielberg directed ${spielbergDramaCount} drama movies.`);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  //see if the array is not empty
  if(moviesArray.length ===0){
    return 0;
  }
  //using reduce to sum up all scores
  const totalScore = moviesArray.reduce((sum,movie) => (movie.score || 0),0)

  //Calculation of average score
  const averageScore = totalScore/ moviesArray.length;

  //return the average score rounded to 2 decimal places

  return parseFloat(averageScore.toFixed(2));
}
//calling function with imported array
const averageScore = scoresAverage(movies);

console.log(`The average score of all movies is ${averageScore}`)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  //filter array to include only drama movies
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

  //to get average score of drama movies using scoresAverage
  const averageDramaScore = scoresAverage(dramaMovies);

  return averageDramaScore;
}
//calling function 
const averageDramaScore = dramaMoviesScore(movies);

console.log(`The average score of drama movies is ${averageDramaScore}`);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  //using slice methode to create a shallow copy of the array(immutable)
  const sortedMovies = moviesArray.slice();

  //use sort methods to sort the array by release year and title
  sortedMovies.sort((a,b)=> {
    if (a.year !== b.year){
      return a.year - b.year;//sorting by release year
    }else {
      return a.title.localeCompare(b.title);//if relese year is the same sort alphabetically by title
    }
  });

  return sortedMovies;
}
//calling function
const sortedMovies = orderByYear(movies);
console.log("Sorted movies:");
console.log(sortedMovies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  //use slice method to create a shalow copy of the array(immutability)
  const sortedMovies = moviesArray.slice();
  //sort method to sort the array alphabetically by title
  sortedMovies.sort((a,b) => a.title.localeCompare(b.title));
  //using map method to extract titles from the first 20 movies 
  const first20Titles = sortedMovies.slice(0,20).map(movie => movie.title);

  return first20Titles;
}
//calling the function
const first20Titles = orderAlphabetically(movies);

console.log("First 20 titles Alphabetically:");
console.log(first20Titles);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // using map to cretae a new array with modified duration
  const modifiedMovies = moviesArray.map(movie =>{
    //paring the hours and minutes from the original duration string
    const match = movie.duration.match(/(\d+)h\s*(\d*)min/);
    const hours = match ? parseInt(match[1], 10):0;
    const minutes = match ? parseInt(match[2],10):0;

    //calculating equivalent duration in min
    const durationInMinutes = hours * 60 + minutes;

    //return a new movie object with the modified duration
    return{
      ...movie,//copy the original movie properties
      duration : durationInMinutes // update the duration property

    };
  });
  return modifiedMovies;
}
//calling function
const moviesWithMinutes = turnHoursToMinutes(movies);

console.log("Movies with duration in minutes:");
console.log(moviesWithMinutes);


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if(moviesArray.length === 0){
    //when array is empthy
    return 'There are no movies in the array';
  }
  //create an object to store the total scores and counts for eeach year
  const yearStats = {};

  //calculating the total score and count for each year
  moviesArray.forEach(movie => {
    const year = movie.year;
    const score= movie.score || 0;

    if(yearStats[year]){
      yearStats[year].totalScore += score;
      yearStats[year].count += 1;
    }else{
      yearStats[year] = {totalScore: score, count: 1};
    }
    
  });

  //calculating average for each year
  const averageScore =Object.entries(yearStats).map(([year, {totalScore, count }])=> ({
    year: parseInt(year, 10),
    averageScore: totalScore / count
  }));

  //find the year with highest average score
  const bestYear = averageScore.reduce((best, current) =>
  current.averageScore > best.averageScore ? current : best);

  return`The best year was ${bestYear.year} with an average score of ${bestYear.averageScore.toFixed(2)}`;

}
//calling the function
const bestYearInfo = bestYearAvg(movies);

console.log(bestYearInfo);



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
