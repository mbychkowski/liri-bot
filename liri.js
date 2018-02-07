require('dotenv').config();
var keys = require('./keys');

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var songs = [];

var request = require('request');

// var client = new Twitter(keys.twitter);

// user input from console.
var args = process.argv;
var liriDo = args[2];

var liriQuery = '';
for (var i = 3; i < args.length; i++) {
  liriQuery += args[i] + ' ';
}
console.log('\nliriDo:', liriDo);
console.log('liriQuery:', liriQuery);
console.log('\n==========================================================================\n');

switch (liriDo) {
  case 'my-tweets':

    break;

  case 'spotify-this-song':

    spotify.search({
        type: 'track',
        query: liriQuery
      },
      function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }

        var items = data.tracks.items;

        for (var i = 0; i < items.length; i++) {

          var artist = items[i].artists[0].name;
          var name = items[i].name;
          var album = items[i].album.name;
          var previewLink = items[i].preview_url;

          var song = new Song(artist, name, album, previewLink)

          songs.push(song);
        }

        for (var i = 0; i < songs.length; i++) {
          var num = i + 1;
          console.log('[' + num + ']')
          console.log('Artist: ' + songs[i].artist);
          console.log('Name: ' + songs[i].name);
          console.log('Album: ' + songs[i].artist);
          console.log('Preview: ' + songs[i].previewLink);
          console.log('\n==========================================================================\n');
        }
      });

    break;

  case 'movie-this':
    var requestURL = 'http://www.omdbapi.com/?' +
      't=' + liriQuery + '&' +
      'type=movie&' +
      'apikey=trilogy';
    request(requestURL, function(error, response, body) {

      console.log(requestURL);
      // Response status code 200 is successful request
      if (!error && response.statusCode === 200) {
        var data = JSON.parse(body);

        var title = data.Title;
        var year = data.Year;
        // change to use index of and search for that database
        var imdbRating = data.Ratings[0].Value;
        var tomatoRating = data.Ratings[1].Value;
        var language = data.Language;
        var plot = data.Plot;
        var actors = data.Actors;
        console.log('*Title: ', title);
        console.log('*Year: ', year);
        console.log('*IMDB: ', imdbRating);
        console.log('*Tomato: ', tomatoRating);
        console.log('*Language: ', language);
        console.log('*Plot: ', plot);
        console.log('*Actors: ', actors);
        // missing country of productions
      }
    });

    break;

  case 'do-what-it-says':

    break;

  default:
    console.log("I'm sorry, Sam. I'm afraid I can't do that.");
}

function Song(artist, name, album, previewLink) {
  this.artist = artist;
  this.name = name;
  this.previewLink = previewLink;
  this.album = album;
}
