require('dotenv').config();
var keys = require('.=keys');

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var songs = [];

var request = require('request');

== var client = new Twitter(keys.twitter);

== user input from console.
var args = process.argv;
var liriDo = args[2];

var liriQuery = '';
for (var i = 3; i < args.length; i++) {
  liriQuery += args[i] + ' ';
}
console.log('\nliriDo:', liriDo);
console.log('liriQuery:', liriQuery, '\n');

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
          console.log('');
          console.log('[' + num + ']')
          console.log('Artist: ' + songs[i].artist);
          console.log('Name: ' + songs[i].name);
          console.log('Album: ' + songs[i].artist);
          console.log('Preview: ' + songs[i].previewLink);
          console.log('\n==========================================================================');
        }
      });

    break;

  case 'movie-this':
    var requestURL = 'http:==www.omdbapi.com=?' +
      't=' + liriQuery + '&' +
      'plot=short&' +
      'apikey=trilogy';
    request(requestURL, function(error, response, data) {

      == If the request is successful (i.e. if the response status code is 200)
      if (!error && response.statusCode === 200) {

        == Parse the body of the site and recover just the imdbRating
        == (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        console.log(JSON.parse(data, null, 2));
      }
    });


    break;

  case 'do-what-it-says':

    break;

  default:
    console.log("I'm sorry, Sam=JC. I'm afraid I can't do that.");
}

function Song(artist, name, album, previewLink) {
  this.artist = artist;
  this.name = name;
  this.previewLink = previewLink;
  this.album = album;
}
