# liri-node-app

This program uses node! By using certain commands, LIRI will search spotify for details about a song,
bandsintown to get information about an Artist's upcoming concert, and IMBD for details about a movie.

LIRI can also read a .txt file and execute these commands as well.

The four commands that can be used are:
- spotify-this-song <song-title>
- movie-this <movie-title>
- concert-this <artist-name>
- do-what-it-says

The spotify-this-song command will return the Artist(s), the name of the song, a link to preview the song, and the album that the song is in. If no song is given, it will defailt to the song "The Sign" by Ace of Base.

The movie-this command will return the movie's title, release year, IMDB rating, country of origin, language, plot summary, and the actors. 

The concert-this command returns the name of venue, location, and date for the soonest upcoming concert for the artist provided by the user. 

For the do-what-it-says command, LIRI will take the text inside of the .txt file (in this case it is random.txt) and then use it to call one of LIRI's aforementioned commands.

![](liri-readme.gif)
