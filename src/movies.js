// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMovies =  moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return dramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0
    }
    const scores = moviesArray.map(movie => {
        if (!movie.score) {
            return 0
        } else {
            return movie.score
        }
    }
       
        )
    const sum = scores.reduce((curr, acc) => curr + acc, 0)
    const averageScore = sum / scores.length
    return Math.round(averageScore * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));
    if (dramaMovies.length === 0) {
      return 0;
    }
    const dramaScoreSum = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
    const dramaAverageScore = dramaScoreSum / dramaMovies.length;
    return Math.round(dramaAverageScore * 100) / 100

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMoviesArray = moviesArray.slice();
    const moviesYear = newMoviesArray.filter(movie => movie.year)
    const sortedMovies = moviesYear.sort((a, b) => a - b)
    return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newMoviesArray = moviesArray.slice();
    const moviesTitles = newMoviesArray.slice(0,20).map(movie => movie.title).sort()
    return moviesTitles


}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newMoviesArray = moviesArray.map(movie => {
        const newMovie = {...movie}
        const durationString = newMovie.duration
        const durationArray = durationString.split(" ")

        let timeInMinutes = 0;
        durationArray.forEach(duration => {
            if (duration.includes("h")) {
            timeInMinutes += parseInt(duration) * 60
          } 
            if (duration.includes("min")) {
            timeInMinutes += parseInt(duration)
          }
        });
        newMovie.duration = timeInMinutes
        return newMovie
      });
    
      return newMoviesArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) {
        return null;
      }
    
      const yearData = {};
    
      moviesArray.forEach(movie => {
        const year = movie.year;
        const score = parseFloat(movie.score);
    
        if (!yearData[year]) {
          yearData[year] = { totalScore: 0, movieCount: 0 };
        }
    
        yearData[year].totalScore += score;
        yearData[year].movieCount++;
      });
    
      let bestYear = null;
      let bestRate = 0;
    
      for (let year in yearData) {
        const rate = yearData[year].totalScore / yearData[year].movieCount;
        if (rate > bestRate) {
          bestYear = year;
          bestRate = rate;
        }
      }
    
      return `The best year was ${bestYear} with an average score of ${bestRate.toFixed(2)}`;
}
