const express = require('express');
const Twit = require('twit');

const app = express();

const config = {
  consumer_key: '0FaGAgBSlsBh1paQWPclXwIqz',
  consumer_secret: 'coX8nGKKpM4ua6YxECKJDD11JGlUB8E4iIKMg7EOYc6otnOw1h',
  access_token: '1127979460710551552-W3q3tukSXLoj7IosEeJxjDOnciyjhG',
  access_token_secret: 'vbeTXuMKQAbCxunCaBkvXDXwlFk2XvXyxfJbibzuHZAeQ',
  imeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
  strictSSL: true, // optional - requires SSL certificates to be valid.
  AccessControlAllowOrigin: '*',
};
const T = new Twit(config);

// T.get(
//   'search/tweets',
//   { q: 'tfl lift access since:2019-05-13', count: 100 },
//   (err, data, response) => {
//     console.log(data.statuses.map(status => status.text));
//   },
// );

T.get(
  'search/tweets',
  { q: 'tfl lift access since:2019-05-13', count: 100, url: 'https://twitter.com/TfL' },
  (err, data, response) => {
    console.log(data.statuses.map(status => status.text));
  },
);
app.listen(3000, () => console.log('server working on port 3000'));
