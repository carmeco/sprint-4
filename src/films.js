const { number } = require("yargs");

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let allDirectors =  [];
  array.map((movie) => allDirectors.push(movie.director));
  return allDirectors;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter((movie) => movie.director === director);
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let scores = [];
  getMoviesFromDirector(array, director).map((movie) => scores.push(movie.score));
  let average = scores.reduce((total, num) => total + num)/scores.length;
  return Math.round(average*100)/100;
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let moviesByTitle = [];
  array.map((movie) => moviesByTitle.push(movie.title));
  moviesByTitle.sort().splice(20);
  return moviesByTitle;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let moviesByYear = [];
  array.sort();
  array.map((movie) => {
    let index = moviesByYear.findIndex((nextMovie) => movie.year <= nextMovie.year);
    if (index === -1 ) {
      moviesByYear.push(movie);
    } else {
      moviesByYear.splice(index, 0, movie);
    } 
  });
  return moviesByYear;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let genreMovies = array.filter((movie) => movie.genre.includes(category));
  let scores = [];
  genreMovies.map((movie) => {
    if (typeof movie.score == 'number') {
      scores.push(movie.score)
    }
  });
  let average = scores.reduce((total, num) => total + num, 0)/scores.length;
  return Math.round(average*100)/100;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let moviesInMins = [];
  array.map((movie) => {
    let hours = +movie.duration.slice(0, 1);
    let minutes = movie.duration.slice(3, movie.duration.length-3);
    minutes = minutes != '' ? +minutes : 0;
    let time = hours * 60 + minutes;
    let movieInMins = {...movie};
    movieInMins.duration = time;
    moviesInMins.push(movieInMins);
  });
  return moviesInMins;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let yearMovies = array.filter((movie) => movie.year == year);
  let bestMovie = [];
  bestMovie.push(yearMovies[0]);
  yearMovies.forEach((movie) => {
    if (movie.score > bestMovie.score) {
      bestMovie[0] = movie;
    }
  });
  return bestMovie;
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
