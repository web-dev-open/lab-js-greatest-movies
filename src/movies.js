import movies from './data'
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let d = {}
    d = moviesArray.director
    return d
}
let director = movies.map(getAllDirectors)
console.log(director)
//-------------------------------------------------------------------------------------------------------------------------------------

//Bonus: new array with unique Director's name
function resarr(a) {
  let res = [];
  let s = '';

  if (a.length === 0) {
    return null;
  } else {
    for (let i = 0; i < a.length; i++) {
      s = a[i];
      if (a.indexOf(s) !== -1) {
        if (a.indexOf(s, i + 1) == -1) {
          
          res.push(s);
        } 
        else {
          a.splice(i, 1);
        }
      }
    }
    return res;
  }
}
const unique = resarr(director)
console.log(unique);
//------------------------------------------------------------------------------------------------------------------------------------------


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let d = {};
   
    d = moviesArray.director =='Steven Spielberg' && moviesArray.genre.includes('Drama');
    return d;
}

let ans = movies.filter(howManyMovies);
console.log(ans);
console.log(ans.length); 
//--------------------------------------------------------------------------------------------------------------------------------------------


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(!moviesArray.length){
      return 0;
    }

    const score = moviesArray.map(val=>val.score);
    
    const sscore = score.reduce((sum,value)=>{
      return sum + value
    },0)

    return sscore / moviesArray.length;

}

const result = scoresAverage(movies);
console.log(result);
//---------------------------------------------------------------------------------------------------------------------------------------


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    if(!moviesArray.length){
      return 0;
    }
    const drama = moviesArray.filter(val=>val.genre.includes('Drama'));
    const aver = scoresAverage(alldrama);
    return aver;
  
  }
  const drama = movies.map(val=>val.genre.includes('Drama'));
  const res = dramaMoviesScore(movies);
  console.log(res);
//----------------------------------------------------------------------------------------------------------------------------------------

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const ar = [...moviesArray];
    return ar.sort((a,b)=>{  
      if (a.year > b.year) {
        return 1;
      }
       else if (a.year < b.year) {
        return -1;
      }
      else{
        return 0;
      }
    })
  }
  const arr = orderByYear(movies);
  console.log(arr);
  //--------------------------------------------------------------------------------------------------------------------------------------

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function order(moviesArray) {
    return moviesArray
    .map(val=>val.title)
    .sort((a,b)=>{
      const t1 = a.toLowerCase();
      const t2 = b.toLowerCase();
      if(t1>t2){
        return 1;
      }
      else if(t1<t2){
        return -1
      }
      else{
        return 0;
      }

    }).slice(0,20)

}
const answer = order(movies);
console.log(answer);
//---------------------------------------------------------------------------------------------------------------------------------------

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
  const minva = parseInt('2h');
//------------------------------------------------------------------------------------------------------------------------------------------


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) 
{  
  if(!moviesArray.length){
    return 0;
  }
  const mByYear = orderByYear(moviesArray);
   let lastYear = 0;
   let bigAver = 0;
   let bestYear = 0;
  
  for (let i = 0; i < mByYear.length; i++) {
    if (mByYear[i].year > lastYear) {
      const TYM = mByYear.filter(value => 
        
        value.year === mByYear[i].year
          
      );
      if (scoresAverage(TYM) > bigAver) {
        bigAver = scoresAverage(TYM);
        bestYear = mByYear[i].year;
      }
      lastYear = mByYear[i].year;
    }
  }
  return `The best year was ${bestYear} with an average score of ${bigAver}`;
}
const rest = bestYearAvg(movies);
//-----------------------------------------------------------------------------------------------------------------------------------------


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
