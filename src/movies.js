//import movies from './data'; 
//import { movies} from './data';
const movies = require("./data");






// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//function getAllDirectors(moviesArray) {
//     let newArr = moviesArray.map((elements) => {console.log(`${elements.director}`))
//     let 
//}

//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//const howManyMovies = (moviesArray) => {
//    const steven = moviesArray.filter((elements) => {element.director === "Steven Spielberg"}
//    );
//    const stevenDrama = steven.filter((elements) => {element.genre.includes("Drama") })
// }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

/*
function scoresAverage(moviesArray) {
    const scrAvg =  moviesArray.reduce((sum, movies) => sum += movies.score, 0)/moviesArray.length
    return scrAvg.toFixed(1);
 }

 console.log(scoresAverage(movies))

 console.log(typeof(scoresAverage(movies))) */

// Iteration 4: Drama movies - Get the average of Drama Movies
/*
const dramaMoviesScore = (moviesArray) => { 
    //const drama = moviesArray.map((movie) => movie.genre.includes("Drama"));
    const dramaAvg =  moviesArray.reduce((sum, movie) => {
        if (movie.genre.includes("Drama")) return sum += movie.score
        else return sum;
    }, 0)/ moviesArray.length;
    
    return dramaAvg.toFixed(1); 
    
}

console.log(dramaMoviesScore(movies)); */


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
/*
function orderByYear(moviesArray) {
    const order = moviesArray.sort((a, b) => a.year - b.year);
    return order;
 }

console.log(orderByYear(movies))
*/

/*
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderAlphabe =  moviesArray.sort((a, b) => a.title === b.title ? 0 : a.title < b.title ? -1 : 1).splice(0, 20)
    
    //const firstTwent = orderAlphabe;

    return orderAlphabe
 }
console.log(orderAlphabetically(movies))
*/
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const turnHoursToMinutes = (moviesArray) => {
    const movieDuration =  moviesArray.map((e) => e.duration)
    return movieDuration;
    
 }
turnHoursToMinutes


 console.log(turnHoursToMinutes(movies))



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }