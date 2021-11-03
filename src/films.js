const { number } = require("yargs");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  [];
  array.map((movie) => result.push(movie.director))
  return result;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((movie) => movie.director === director);
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let directorScores = [];
  getMoviesFromDirector(array, director).map((movie) => directorScores.push(movie.score));
  let directorAverage = directorScores.reduce((total, num) => total + num)/directorScores.length;
  return Math.round(directorAverage*100)/100;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let orderByTitle = [];
  array.map((movie) => orderByTitle.push(movie.title));
  orderByTitle.sort().splice(20);
  return orderByTitle;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let orderByYear = [];
  array.sort();
  array.map((movie) => {
    let index = orderByYear.findIndex((nextMovie) => movie.year <= nextMovie.year);
    if (index === -1 ) {
      orderByYear.push(movie);
    } else {
      orderByYear.splice(index, 0, movie);
    } 
  })
  return orderByYear;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let genreMovies = array.filter((movie) => movie.genre.includes(category));
  let genreScores = [];
  genreMovies.map((movie) => {
    if (typeof movie.score == 'number') {
      genreScores.push(movie.score)
    }
  });
  let genreAverage = genreScores.reduce((total, num) => total + num, 0)/genreScores.length;
  return Math.round(genreAverage*100)/100;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let newArray = [];
  array.map((movie) => {
    let hours = parseInt(movie.duration.slice(0, 1));
    let minutes = movie.duration.slice(3, movie.duration.length-3);
    minutes = minutes != '' ? parseInt(minutes) : 0;
    let time = hours * 60 + minutes;
    let newMovie = {...movie};
    newMovie.duration = time;
    newArray.push(newMovie);
  });
  console.log(newArray);
  return newArray;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
