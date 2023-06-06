// Iteración 1: ¿Todos los directores? - Obtener la matriz de todos los directores.
// _Bonus_: parece que algunos de los directores dirigieron varias películas, por lo que aparecerán varias veces en la lista de directores.
// ¿Cómo podrías "limpiar" un poco esta matriz y hacerla unificada (sin duplicados)?


/*{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": "2h 22min",
  "genre": ["Crime","Drama"],
  "score": 9.3
} */
function getAllDirectors(movies) {
    var directors = movies.map(function(movie) {
      return movie.director;
    });
   
    return directors;
  }
 


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    var count = 0;
 
    var filtreMovies = movies.filter(function(movie) {
      return movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") !== -1;
    });
 
    count = filtreMovies.length;
 
    return count;
  }
 


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoreAverage(movies) {
    var totalScores = movies.reduce(function(sum, movie) {
      return sum + movie.score;
    }, 0);
 
    var averageScore = totalScores / movies.length;
    var roundedAverage = Math.round(averageScore * 100) / 100;  /*var averageScore = totalScores / movies.length;


    return averageScore.toFixed(2); */
 
    return roundedAverage.toString();
  }
 


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    var dramaMovies = movies.filter(function(movie) {
      return movie.genre.includes("Drama");
    });
 
    if (dramaMovies.length === 0) {
      return "No se encontraron películas dramáticas.";
    }
 
    var totalScores = dramaMovies.reduce(function(sum, movie) {
      return sum + movie.score;
    }, 0);
 
    var averageScore = totalScores / dramaMovies.length;
 
    return averageScore.toFixed(2);
  }
 


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)//dificil
function orderByYear(movies) {
    var sortedMovies = movies.slice().sort(function(a, b) {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
 
    return sortedMovies;
  }
 


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    var sortedMovies = movies.slice().sort(function(a, b) {
      return a.title.localeCompare(b.title);
    });
 
    var top20Titles = sortedMovies.slice(0, 20).map(function(movie) {
      return movie.title;
    });
 
    return top20Titles;
  }
 


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


