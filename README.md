# liri-node-app

#LIRI is a command line node app similar to siri. It is a language interpretation and recognition interface.

#In order to run this app, user would have to type node, followed by the filename: liri.js then one of the four command line(concert-this or spotify-this-song or movie-this or do-what-it-says) then the artist or song name or movie name that they want to pull the information on.
        for example: node liri.js concert-this lady gaga

    - concert-this: With this command, LIRI will retrieve the data from Bands in Town API and provide the user with the name of the venue, venue location and date of the event.
    - spotify-this song: With this command, LIRI will retrieve the data from Spotify API and provide the user with the Artist(s), The song's name, a preview link of the song from and the name of the album. 
    - movie-this: With this command, LIRI will retrieve the data from OMDB API and provide user with title of the movie, year the movie came out, IMDB rating of the movie, country it was produced, language, plot and actors name. 
    - do-what-it-says: With this command, LIRI will retrieve information in another file and run that to retrieve data from Spotify API and give informations mentioned above with spotify-this-song.

# If the movie-this command is ran without the name of the movie then the default movie Mr Nobody will run and if spotify-this-song is ran without the name of the song then Ace of Base will run as a default. 

-------------------------XX----XX--------XX----------------------------------------------------------
#liri.js file is organized with all the required dependencies listed on top of the file followed by establishing variables for user's input in the terminal. Then we have the if/else statements instructing
which function to run when it receives one command vs the other. The functions are global and listed at the end. 


#Link to github: 

#Technologies used in the app: Node js, moments js, axios package, Spotify API, OMDB API, DotEnv, Bands in Town API, 

#Links of Screnshoots that shown LIRI app running from the user side.


    Data output of Bands-In-Town API: https://github.com/anukc1/liri-node-app/blob/master/Images/Concert-this.png


    Data output of Spotify API: https://github.com/anukc1/liri-node-app/blob/master/Images/Spotify-this.png

    Data output of OMDB API: https://github.com/anukc1/liri-node-app/blob/master/Images/Movie-this.png


    Data output using do-what-it-says command: https://github.com/anukc1/liri-node-app/blob/master/Images/Do-what-it-says.png







