var keys = require('../keys');

var Twitter = require('twitter');
var twitter = new Twitter(keys.twitter);

var tweetArr = [];

function Tweet(name, screenName, date, content) {
  this.name = name;
  this.screenName = screenName;
  this.date = date;
  this.content = content;
}

Tweet.prototype.printInfo = function() {
  console.log(this.name);
  console.log('@' + this.screenName + '\n');
  console.log(this.date + '\n');
  console.log(this.content);
  console.log('\n############################################################\n');
}

function tweetSearch(liriQuery) {

  var params = {
    screen_name: liriQuery,
    count: 20
  };

  twitter.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      // console.log(tweets);
      for (var i = 0; i < tweets.length; i++) {
        var name = tweets[i].user.name;
        var screenName = tweets[i].user.screen_name;
        var date = tweets[i].created_at;
        var content = tweets[i].text;

        var tweet = new Tweet(name, screenName, date, content);
        tweet.printInfo();

        tweetArr.push(tweet);
      }
    }
  });
}

module.exports = {
  tweetSearch: tweetSearch
}
