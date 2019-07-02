
require("dotenv").config();

var axios = require("axios");

var keys= require("./keys.js");

var Spotify = require('node-spotify-api')

var spotify = new Spotify(keys.spotify);

var apiCall = process.argv[2];

var userInput = process.argv.slice(2);

console.log("First test: " + userInput);


// switch(apiCall){
// case "movie":
// movie();
// break;

// case "spotify":

// break;

// case "bands":

// break;

// }

function movie() {

    var queryUrlMovie = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

    console.log(queryUrlMovie);
    
    axios.get(queryUrlMovie).then(
       
    
    function(response) {
          console.log("Title of the movie: " + response.data.Title);
          console.log("Year the movie came out: " + response.data.Year);
          console.log("The movie's IMDB rating is: " + response.data.imdbRating);
          console.log("Rotten Tomatoes Rating of the movie is: " + response.data.Ratings.Value);
          console.log("Country where the movie was produced is: " + response.data.Country);
          console.log("Language of the movie is: " + response.data.Language);
          console.log("Plot of the movie: " + response.data.Plot);
          console.log("Actors in the movie: " + response.data.Actors)
      
        })
        .catch(function(error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
          }
          console.log(error.config);
        });

        

}

console.log( "This is the info: " + movie());


// var apiCall = process.argv[2];
// var userInput = process.argv.slice(3);


/*
userInput = switch(apicall) {
    case "movie-this": 
    getMovies);
    break;
    case "spotify-this":
        getSong();
        break

        function get movie() {
            var movie = userinput.join(+)
        }
}
*/



//OMDAPI- movie info.

/*

axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("Title of the movie: " + response.data.Title);
    console.log("Year the movie came out: " + response.data.Year);
    console.log("The movie's IMDB rating is: " + response.data.imdbRating);
    console.log("Rotten Tomatoes Rating of the movie is: " + response.data.Ratings.Value);
    console.log("Country where the movie was produced is: " + response.data.Country);
    console.log("Language of the movie is: " + response.data.Language);
    console.log("Plot of the movie: " + response.data.Plot);
    console.log("Actors in the movie: " + response.data.Actors)

  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });


*/