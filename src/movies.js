// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirs=moviesArray.map(movie=> movie.director)
  const uniqueDirs=allDirs.filter((dir,i,allDirs)=>{
         return allDirs.indexOf(dir)==i
  });
  return uniqueDirs
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   const steven=moviesArray.filter((movie)=>{ return (movie.director=="Steven Spielberg"&& movie.genre.includes("Drama"))})
   return steven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(moviesArray==undefined||moviesArray.length==0)
     return 0;
  const avg=moviesArray.reduce((sum, movie)=>{
    if(movie.hasOwnProperty('score'))
      return sum + movie.score;
    else 
      return sum;
  },0)/moviesArray.length
  return parseFloat(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const drama=moviesArray.filter((movie)=> movie.genre.includes('Drama'))
  return scoresAverage(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

  const clone=JSON.parse(JSON.stringify(moviesArray))
  clone.sort((a ,b)=>{
    if(a.year==b.year)
    {
      if(a.title>b.title)
        return 1;
      else 
        return -1;
    }
    else 
      return a.year-b.year;
  })
  return clone
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const titles=moviesArray.map((movie)=> String(movie.title))
  titles.sort();
  return titles.slice(0,20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const clone=JSON.parse(JSON.stringify(moviesArray))
  const arr=clone.map((movie)=>{
    let dur=movie.duration
    let h=dur.indexOf('h')
    let hrs=0
    if(h!=-1)
    {
      hrs=60*parseInt(dur.slice(0,h))
    }

    let m=dur.indexOf('m')
    let mins=0
    if(m!=-1)
    {
      if(h==-1)
        mins=parseInt(dur.slice(0,m))
      else 
        mins=parseInt(dur.slice(h+2,m))
    }
    movie.duration=parseInt(hrs+mins) 
    return movie
  })
  return arr
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
     let yearChart=[]
     let bestYear=null
     let maxAvg=0
     for(let i=0;i<moviesArray.length;i++)
     {
        let yr=moviesArray[i].year
        if(!yearChart.includes(yr))
        {
          yearChart.push(yr)
           let score=0
           let count=0;
           for(let j=i;j<moviesArray.length;j++)
           {
              if(moviesArray[j].year==yr)
              {
                score=score+moviesArray[j].score
                count=count+1
              }
           }
           let avg=score/count 
           if(avg>maxAvg)
           {
               maxAvg=avg;
               bestYear=yr 
           }
           else if(avg==maxAvg)
           {
              if(yr<bestYear)
              {
                bestYear=yr 
              }
           }
        }
     }
     if(bestYear==null)
       return null
     return `The best year was ${bestYear} with an average score of ${maxAvg}`
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
