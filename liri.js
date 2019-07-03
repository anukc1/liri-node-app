
require("dotenv").config();

var fs = require("fs")

var axios = require("axios");

var keys = require("./keys.js");

var Spotify = require('node-spotify-api');

var bandsintown = require('bandsintown');

var moment = require('moment');

var spotify = new Spotify(keys.spotify);

var apiCall = process.argv[2];

var userInput = process.argv.slice(3);

var artistname = userInput.join("%20")


//function to call the movie

if (apiCall == "movie-this") {

    function movie() {

        var queryUrlMovie = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy";

        console.log(queryUrlMovie);

        axios.get(queryUrlMovie).then(


            function (response) {
                console.log("Title of the movie: " + response.data.Title);
                console.log("Year the movie came out: " + response.data.Year);
                console.log("The movie's IMDB rating is: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating of the movie is: " + response.data.Ratings.Value);
                console.log("Country where the movie was produced is: " + response.data.Country);
                console.log("Language of the movie is: " + response.data.Language);
                console.log("Plot of the movie: " + response.data.Plot);
                console.log("Actors in the movie: " + response.data.Actors)

            })
            .catch(function (error) {
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



    };

    console.log("This is the info: " + movie());
}
//------------------------Concert---------------------------------------------------------------

else if (apiCall == "concert-this") {

    function band() {

        //console.log("Artist Name:"+artistname)
        var queryUrlBands = "https://rest.bandsintown.com/artists/" + artistname + "/events?app_id=codingbootcamp";


        console.log("this is line98 test: " + queryUrlBands);

        axios.get(queryUrlBands).then(
            function (response) {

                var date = response.data[0].datetime
                var properDate = moment(date).format('L')
                console.log("Date: " + properDate);
                console.log("Name of the venue: " + response.data[0].venue.name);
                console.log("Venue location: " + response.data[0].venue.city)

                console.log("this is line 114 test: " + queryUrlBands);
                for (i = 0; i < response.data.length; i++) {
                    var j = i + 1
                    var date = response.data[i].datetime
                    var properDate = moment(date).format('L')
                    console.log("Event: " + j)
                    console.log("Date: " + properDate);
                    console.log("Name of the venue: " + response.data[i].venue.name);
                    console.log("Venue location: " + response.data[i].venue.city)
                    console.log("----------------------------\n")

                }

            }
        )
            .catch(function (error) {
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


    console.log(band());

}
else if (apiCall == "spotify-this-song") {

    function songSearch(song) {
        spotify.search({ type: 'track', query: song }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            console.log("----------------------------X-----------------------------------\n")
            console.log("\n Artist(s) name: " + data.tracks.items[0].album.artists[0].name);
            console.log("\n Song's name: " + data.tracks.items[0].name);
            console.log("\n Preview link: " + data.tracks.items[0].preview_url)
            console.log("\n Album name: " + data.tracks.items[0].album.name + "\n")
            console.log("----------------------------X-----------------------------------\n")
        });

    }
    songSearch(artistname);

}
else if (apiCall == "do-what-it-says") {

    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);

        songSearch(data)



        


    })
}















