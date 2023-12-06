// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = moviesArray.map((movie) => {
    return movie.director;
  })

  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let dramaMoviesByStevenSpielberg = moviesArray.filter((movie) => {
    let isDrama=false;
    for(let i=0; i<movie.genre.length; i++){
      if(movie.genre[i]==='Drama'){
        isDrama=true;
        break;
      }
    }
    return isDrama && movie.director==='Steven Spielberg';
  });

  return dramaMoviesByStevenSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(moviesArray.length === 0){
    return 0;
  }

  let totalScore = moviesArray.reduce((acc, current) => {
    let movieScore = current.score !== undefined ? current.score : 0;
    return acc + movieScore;
  }, 0);

  let avgScore = totalScore / moviesArray.length;

  return Number(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let totalDramaMovies = 0;
  
  let totalScoreOfDramaMovies = moviesArray.reduce((acc, current) => {
    let isDrama = current.genre.includes('Drama');
    if(isDrama){
      totalDramaMovies++;
      return acc+current.score;
    }
    return acc;
  }, 0);

  if(totalDramaMovies===0){
    return 0;
  }
  let avgScoreOfDramaMovies = totalScoreOfDramaMovies/totalDramaMovies;

  return Number(avgScoreOfDramaMovies.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  //copy the array
  let newMoviesArray = JSON.parse(JSON.stringify(moviesArray));
  //sort the new array
  newMoviesArray.sort((movieA, movieB) => {
    let diff = movieA.year - movieB.year;
    if(diff===0){
      diff=movieA.title.localeCompare(movieB.title);
    }

    return diff;
  })

  return newMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  //copy the array
  let newMoviesArray = JSON.parse(JSON.stringify(moviesArray));
  //sort alphabetically
  newMoviesArray.sort((movieA, movieB) => {
    return movieA.title.localeCompare(movieB.title);
  });

  let firstTwentySortedMovies = [];
  let firstNMovies = newMoviesArray.length >= 20 ? 20 : newMoviesArray.length; 
  for(let i=0; i<firstNMovies; i++){
    firstTwentySortedMovies.push(newMoviesArray[i]);
  }

  return firstTwentySortedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
 
  let moviesWithDurationInMinutes = moviesArray.map((movie) => {
    let timeArray  = movie.duration.match(/(\d+)h (\d+)min/);
    if(timeArray){
      let hours = Number(timeArray[1]);
      let minutes = Number(timeArray[2]);

      movie['duration']=hours*60+minutes;
    }
    else{
      console.log("INVALID TIME FORMAT");
    }
    return movie;
  })

  return moviesWithDurationInMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  //sort the array by year
  let moviesArraySortedByYear = orderByYear(moviesArray);
  let ratingsForAllMoviesPerYear = {};
  
  //store all the ratings of the movies corresponding to their year of release in an object
  for(let i=0; i<moviesArraySortedByYear.length; i++){
    if((moviesArraySortedByYear[i].year in ratingsForAllMoviesPerYear)){
      ratingsForAllMoviesPerYear[moviesArraySortedByYear[i].year].push(moviesArraySortedByYear[i].score);
    }
    else{
      ratingsForAllMoviesPerYear[moviesArraySortedByYear[i].year] = [moviesArraySortedByYear[i].score];
    }
  }
  // console.log(ratingsForAllMoviesPerYear);

  //find the avg ratings for all the years and store in another object
  let avgRatingPerYear = {};
  for(let year in ratingsForAllMoviesPerYear){
    
    let totalRatingForTheyear = ratingsForAllMoviesPerYear[year].reduce((accumulator, current) => {
      return accumulator+current;
    }, 0);

    let avgRatingForTheYear = totalRatingForTheyear / ratingsForAllMoviesPerYear[year].length;

    avgRatingPerYear[year]=avgRatingForTheYear.toFixed(2);

  }
  console.log(avgRatingPerYear);

  //find the highest avg rating and its corresponding year
  let maxRatingEntry = Object.entries(avgRatingPerYear).reduce((max, current) => {
    return current[1]>max[1] ? current : max;
  }, ['', -1]);

  let maxRating = maxRatingEntry[1];
  let maxRatingYear = maxRatingEntry[0];

  return `The best year was ${maxRatingYear} with an average score of ${maxRating}.`
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
