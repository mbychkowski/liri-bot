require('dotenv').config();

var keys = require('./keys');

var spotifySearch = require('./song').spotifySearch;

var omdbSearch = require('./movie').omdbSearch;

// var movies = require('./movie');

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

    spotifySearch(liriQuery);

    break;

  case 'movie-this':

    omdbSearch(liriQuery);

    break;

  case 'do-what-it-says':

    break;

  default:
    console.log("I'm sorry, Sam. I'm afraid I can't do that.");
}
