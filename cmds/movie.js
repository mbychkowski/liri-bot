var keys = require('../keys');

var request = require('request');

var movies = [];

function Movie(title, year, imdbRating, tomatoRating, language, plot, actors) {
  this.title = title;
  this.year = year;
  this.imdbRating = imdbRating;
  this.tomatoRating = tomatoRating;
  this.language = language;
  this.plot = plot;
  this.actors = actors;
}

Movie.prototype.printInfo = function() {
  console.log('* Title:', this.title);
  console.log('* Year:', this.year);
  console.log('* IMDB:', this.imdbRating);
  console.log('* Tomato:', this.tomatoRating);
  console.log('* Language:', this.language);
  console.log('* Actors:', this.actors);
  console.log('* Plot:', this.plot);
  // missing country of productions
  console.log('\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n');
}

// accessing OMDB with request and parsing of data
function omdbSearch(liriQuery) {
  var requestURL = 'http://www.omdbapi.com/?' +
    't=' + liriQuery + '&' +
    'type=movie&' +
    'apikey=trilogy';

  request(requestURL, function(error, response, body) {

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

      var movie = new Movie(title, year, imdbRating, tomatoRating, language, plot, actors);
      movie.printInfo();

      movies.push(movie);
    }
  });
}

module.exports = {
  omdbSearch: omdbSearch
}
