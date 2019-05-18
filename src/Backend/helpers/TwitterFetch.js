const Twit = require('twit');

async function TwitterFetch() {
  const config = {
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    strictSSL: true, // optional - requires SSL certificates to be valid.
    AccessControlAllowOrigin: '*',
  };
  const T = new Twit(config);
  return new Promise((resolve, reject) => {
    T.get(
      'search/tweets',
      { q: 'tfl lift access since:2019-05-13', count: 100, url: 'https://twitter.com/TfL' },
      (err, data, response) => resolve(data.statuses.map(status => status.text)),
    );
  });
}

module.exports = TwitterFetch;
