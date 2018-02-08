# LIRI Bot
LIRI is like iPhone's SIRI. However, while SIRI is a **Speech** Interpretation and Recognition Interface, LIRI is a **Language** Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.

## How to use
Before asking LIRI any difficult questions. User needs to obtain API keys for Twitter and Spotify and apply them to local `.env` file.
```
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
```
LIRI Bot takes user input via the command line. 
```node liri.js <liri-command> <search item here>```




## Built with
[Node.js](https://nodejs.org/en/docs/) - backend

### NPM packages
[twitter](https://www.npmjs.com/package/twitter) - "An asynchronous client library for the Twitter REST and Streaming API's."

[node-spotify-api](https://www.npmjs.com/package/node-spotify-api) - "A simple to use API library for the Spotify REST API."

[request](https://www.npmjs.com/package/request) - Used for accessing OMDB api.

[dotenv](https://www.npmjs.com/package/dotenv) - "Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology."






## Examples


## Create your own LIRI command (contributions)
You can create your own LIRI command!
