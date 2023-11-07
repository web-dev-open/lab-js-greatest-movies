// Iteration 1: All directors? - Get the array of all directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let allDirectors = [];
  allDirectors = moviesArray.map((eachElement)=>{
    return eachElement.director;
  })
  return allDirectors;
}
// console.log(getAllDirectors(movies))
////Iteration 1--------------------------------completes here.



//_Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
function getUniqueDirectors(moviesArray){
  let uniqueDirectors = [];
  let allDirectors =[];
  allDirectors = moviesArray.map((eachElement)=>{
      return eachElement.director;
  });

  for(let i=0;i<allDirectors.length;i++){
    if(uniqueDirectors.indexOf(allDirectors[i]) === -1){
      uniqueDirectors.push(allDirectors[i]);
    }
  };
  return uniqueDirectors;
}
// console.log(getUniqueDirectors(movies))
////Bonus-1-----------------------------------complete here.



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let stevenDramaMovies = [];
  stevenDramaMovies = moviesArray.filter((eachElement)=>{
    return eachElement.genre.indexOf('Drama') != -1 && eachElement.director==='Steven Spielberg';
  })
  return stevenDramaMovies.length;
}
// console.log(howManyMovies(movies))
////Iteration 2--------------------------------completes here.



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let totalScore = 0;
  let arrLength = moviesArray.length;
  totalScore = moviesArray.reduce((sum, eachElement)=>{
    sum = eachElement.score ? sum+eachElement.score : sum;   
    return sum;
  },0)
  if(arrLength>0){
    return Number((totalScore/arrLength).toFixed(2));
  }else{
    return 0
  }  
}
// console.log(scoresAverage(movies))
////Iteration 3--------------------------------completes here.



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let allDramaMovies = [];
  let totalScore = 0;
  let avg = 0;
  allDramaMovies = moviesArray.filter((eachElement)=>{
    return eachElement.genre.indexOf('Drama') != -1;
  })
  totalScore = allDramaMovies.reduce((sum,eachElement)=>{
    sum = eachElement.score ? sum+eachElement.score : sum;
    return sum;
  },0)  
  avg = allDramaMovies.length ? Number((totalScore/allDramaMovies.length).toFixed(2)) : 0;
  return avg;
}
// console.log(dramaMoviesScore(movies))
////Iteration 4--------------------------------completes here.


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesArrayCloned = JSON.parse(JSON.stringify(moviesArray));
  moviesArrayCloned.sort((element1, element2)=>{
    if(element1.year < element2.year){
      return -1;
    }else if(element1.year > element2.year){
      return 1;
    }else if(element1.year === element2.year){
      if(element1.title < element2.title){
        return -1;
      }else if(element1.title > element2.title){
        return 1;
      }else{
        return 0;
      }
    }
  })
  return moviesArrayCloned;
}
// console.log(orderByYear(movies))
////Iteration 5--------------------------------completes here.






// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {  
  let allTitle = [];
  let moviesArrayCloned2 = JSON.parse(JSON.stringify(moviesArray));
  moviesArrayCloned2.sort((element1, element2)=>{
    if(element1.title < element2.title){
      return -1;
    }else if(element1.title > element2.title){
      return 1;
    }
  })
  allTitle = moviesArrayCloned2.map((eachElement,index)=>{    
      return eachElement.title;   
  })
  return allTitle.slice(0,20);
}
// console.log(orderAlphabetically(movies))
////Iteration 6-------------------------------------completes here.



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let allMoviesArray = JSON.parse(JSON.stringify(moviesArray));
  let movieDurationInMin = [];
  let timeStrings = [];
  let timeValues = [];
  let minuteValue;
 
  allMoviesArray.forEach((eachElement)=>{
    timeStrings = eachElement.duration.split(" ");

    for(let i=0; i<timeStrings.length; i++){
      if(i===0){
        timeValues.push(parseInt(timeStrings[i])*60);
      }else{
        timeValues.push(parseInt(timeStrings[i])*1);
      }
    }    

    minuteValue = timeValues.reduce((sum,element1)=>{
          sum = sum + element1;
          return sum;
        },0);
    eachElement.duration = minuteValue;
    movieDurationInMin.push(eachElement);
  })
  return movieDurationInMin;
  
}
// console.log(turnHoursToMinutes(movies))
// BONUS - Iteration 7------------------------------------completes here.




// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  let years = [];
  let uniqueYears = [];
  let yearMovies = [];
  let scoresAvg;
  let yearScoreAvg =[];

  if(moviesArray.length >0){
    years = moviesArray.map((element)=>{
      return element.year;
    });
    years.forEach((year) => {
      uniqueYears.indexOf(year) === -1 ? uniqueYears.push(year) : "";
    });  
  
    uniqueYears.forEach((year)=>{
      yearMovies = moviesArray.filter((element1)=>{
        return element1.year === year;
      }) 
      scoresAvg = yearMovies.reduce((sum,element2)=>{
        sum = sum + element2.score;
        return Number((sum/yearMovies.length).toFixed(2));
      },0)
  
      yearScoreAvg.push({theYear:year, avgScore:scoresAvg});    
    }) 
    
    yearScoreAvg.sort((elementA, elementB)=> {
      if(elementA.avgScore > elementB.avgScore){
        return -1;
      }else if(elementA.avgScore < elementB.avgScore){
        return 1;
      }else if(elementA.avgScore === elementB.avgScore) {
        if(elementA.theYear < elementB.theYear){
          return -1;
        }else if(elementA.theYear > elementB.theYear){
          return 1;
        }
      }
    })     
    return `The best year was ${yearScoreAvg[0].theYear} with an average score of ${yearScoreAvg[0].avgScore}`    
  }else{
    return null;
  }  
}
// console.log(bestYearAvg(movies))
// BONUS - Iteration 8------------------------------------completes here.




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
