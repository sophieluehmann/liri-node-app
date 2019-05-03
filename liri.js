
require("dotenv").config();

var axios = require("axios");


if (process.argv[2] == "concert-this") {
    var artist = process.argv[3];
    console.log(artist);

    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
    console.log(queryURL);
    
axios.get(queryURL).then(
  function(response) {
    console.log(response);
  }
);
}

if (process.argv[2] == "movie-this") {
    var movie = process.argv.slice(3).join("-")
    console.log(movie);
axios.get("http://www.omdbapi.com/?t=" + movie + "s&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log(response.data)
    console.log(response.data.Title);
    console.log(response.data.Year);
    console.log(response.data.imdbRating);
    //console.log(response.data.rottentomatoes);
    console.log(response.data.Country);
    console.log(response.data.Language);
    console.log(response.data.Plot);
    console.log(response.data.Actors);

  }
)}


var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

if (process.argv[2] == "spotify-this")
spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


var fs = require("fs");

if (process.argv[2] == "do-what-it-says") {
fs.readFile("random.txt", "utf8", function(error, data) {

    if (error) {
      return console.log(error);
    }

    console.log(data);
  
  });
}
  
