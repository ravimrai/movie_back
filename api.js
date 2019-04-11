const https = require('https');

_EXTERNAL_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=0030d0046e7c61d6fa72ce5496daf632';

const callExternalApiUsingHttp = (callback) => {
  https.get(_EXTERNAL_URL, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      return callback(data);
    });
  }).on("error", (err) => {
    console.log("Error: "+ err.message);
  });
}

module.exports.callApi = callExternalApiUsingHttp;
