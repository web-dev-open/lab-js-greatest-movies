import movies from './data'


const log = console.log;
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let dict = {}
    dict = moviesArray.director
    return dict
}
let director = movies.map(getAllDirectors)

log(director)

//_Bonus_: Unique Director's name
function uniquifyarr(arr) {
  let newarr = [];
  let element = '';

  if (arr.length === 0) {
    return null;
  } else {
    for (let i = 0; i < arr.length; i++) {
      element = arr[i];
      if (arr.indexOf(element) !== -1) {
        if (arr.indexOf(element, i + 1) == -1) {
          
          newarr.push(element);
        } 
        else {
          arr.splice(i, 1);
        }
      }
    }
    return newarr;
  }
}
const uniqueDirector = uniquifyarr(director)
console.log(uniqueDirector)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dict = {}
   
    dict = moviesArray.director==='Steven Spielberg'&& moviesArray.genre.includes('Drama')
    return dict
}

let newM = movies.filter(howManyMovies)
log(newM)
log(newM.length) 


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(!moviesArray.length){
      return 0;
    }

    const allscore = moviesArray.map(val=>val.score)
    
    const sumofscore = allscore.reduce((sum,value)=>{
      return sum + value
    },0)

    return sumofscore / moviesArray.length;

}

const avgscore = scoresAverage(movies)
log(avgscore)


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
  if(!moviesArray.length){
    return 0;
  }
  const alldrama = moviesArray.filter(val=>val.genre.includes('Drama'))
  // const dscore = alldrama.filter(val=>val.score)


  const avg = scoresAverage(alldrama)
  return avg

}
const alldrama = movies.map(val=>val.genre.includes('Drama'))
//log(alldrama)

const dramaAvg = dramaMoviesScore(movies)
log(dramaAvg)


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  //creating a copy of movies array using spread operator

  const arr = [...moviesArray]
  //ASCENDING
  return arr.sort((a,b)=>{  
    if (a.year > b.year) {
      return 1;
    }
     else if (a.year < b.year) {
      return -1;
    }
    else{
      return 0
    }
  })
}
const arr = orderByYear(movies)

//log(arr)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    return moviesArray
    .map(val=>val.title)
    .sort((a,b)=>{
      const title1 = a.toLowerCase()
      const title2 = b.toLowerCase()
      if(title1>title2){
        return 1;
      }
      else if(title1<title2){
        return -1
      }
      else{
        return 0
      }

    }).slice(0,20)

}
const title = orderAlphabetically(movies)
//log(title)


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
  return moviesArray.map(movie => {
    const duration = movie.duration.split(' ');

    let minutes = 0;
    for (let time of duration) {
      if (time.includes('h')) {
        minutes += parseInt(time) * 60;
      } else {
        minutes += parseInt(time);
      }
    }
    return {
      ...movie,
      duration: minutes
    };
  });
  

}


const d = turnHoursToMinutes(movies)
log(d)

//This is to clear some basic concept for better understanding of  above function 
const d2 = movies.map(m=>m.duration.split(' '))
//log(d2)

const min = parseInt('2h')
//log(min)



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
   
  if(!moviesArray.length){
    return 0;
  }
  const moviesByYear = orderByYear(moviesArray)

   // control variables
   let lastCheckedYear = 0;
   let biggestAvg = 0;
   let bestYear = 0;
  
  for (let i = 0; i < moviesByYear.length; i++) {
    if (moviesByYear[i].year > lastCheckedYear) {
      // Filter by the year we are at

      const justThisYearMovies = moviesByYear.filter(value => 
        
        value.year === moviesByYear[i].year
          
      );

      // calculate average of the year and save rate and year

      if (scoresAverage(justThisYearMovies) > biggestAvg) {
        biggestAvg = scoresAverage(justThisYearMovies);
        bestYear = moviesByYear[i].year;
      }
      lastCheckedYear = moviesByYear[i].year;
    }
  }
  return `The best year was ${bestYear} with an average rate of ${biggestAvg}`;



}
const res = bestYearAvg(movies)




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
