var keys = require('./keys');

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var songs = [];

function Song(artist, name, album, previewLink) {
  this.artist = artist;
  this.name = name;
  this.previewLink = previewLink;
  this.album = album;
}

Song.prototype.printInfo = function() {
  console.log('Artist: ' + this.artist);
  console.log('Name: ' + this.name);
  console.log('Album: ' + this.artist);
  console.log('Preview: ' + this.previewLink);
  console.log('\n==========================================================================\n');
}

// access node-spotify-api and parse data
function spotifySearch(liriQuery) {
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

        var song = new Song(artist, name, album, previewLink);
        song.printInfo();

        songs.push(song);
      }
    });
}

module.exports = {
  spotifySearch: spotifySearch,
};
