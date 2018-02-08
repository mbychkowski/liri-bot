// Requires
require('dotenv').config();

var keys = require('./keys');

var tweetSearch = require('./tweet').tweetSearch;
var spotifySearch = require('./song').spotifySearch;
var omdbSearch = require('./movie').omdbSearch;
var randomSearch = require('./random').randomSearch;

// User inputs from command window
var args = process.argv;
var liriDo = args[2];

var liriQuery = '';
for (var i = 3; i < args.length; i++) {
  liriQuery += args[i] + ' ';
}

// Process liri-bot inputs
console.log('\nLiri, execute command', liriDo);
console.log('\nLiri, query for', liriQuery);
console.log('\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n');

switch (liriDo) {

  case 'my-tweets':
    tweetSearch(liriQuery);
    break;

  case 'spotify-this-song':
    spotifySearch(liriQuery);
    break;

  case 'movie-this':
    omdbSearch(liriQuery);
    break;

  case 'do-what-it-says':
    randomSearch();
    break;

  default:
    console.log("I'm sorry, Sam. I'm afraid I can't do that.");
}
