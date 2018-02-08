var fs = require('fs');

var tweetSearch = require('./tweet').tweetSearch;
var spotifySearch = require('./song').spotifySearch;
var omdbSearch = require('./movie').omdbSearch;

function randomSearch() {
  fs.readFile('random.txt', 'utf8', function(error, data) {

    if (error) {
      return console.log(error);
    }

    var textArr = data.split(',');

    var liriDo = textArr[0];
    var liriQuery = textArr[1];

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

      default:
        console.log("I'm sorry, Sam. I'm afraid I can't do that.");
    }
  });
}

module.exports = {
  randomSearch: randomSearch
}
