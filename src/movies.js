const movies = require('./data.js');
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors( movies ) {
  const directors = movies.map( ele => ele.director );
  
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies( movies ) {
  const speil = movies.filter( ele => ele.genre.includes('Drama') && ele.director === 'Steven Spielberg');
  return speil.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage( movies ) {
  if ( !movies.length ) return 0;
  const totalScore = movies.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
  return Math.round((totalScore / movies.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore( movies ) {
  const darray = movies.filter( ele => ele.genre.includes('Drama'));
  if ( !darray.length ) return 0;
  const dscore = darray.reduce((accumulator, currentValue) => accumulator + currentValue.score, 0);
  return Math.round((dscore / darray.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear( movies ) {
  const movies2 = [...movies];
  //const movies3 = movies2.sort((a, b) => a.year - b.year);
  const movies3 = movies2.sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year) {
      movies2.sort((a, b) => a.title - b.title) };
  });
  return movies3;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically( movies) {
  const movies4 = [...movies];
  const movies5 = movies4.sort((a, b) => a.title - b.title);
  return movies5.splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
