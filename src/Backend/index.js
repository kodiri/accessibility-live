// Helpers
const express = require('express');
const fetch = require('node-fetch');
const TwitterFetch = require('./helpers/TwitterFetch');
require('dotenv').config();

const app = express();

// Settings
app.set('PORT', process.env.PORT || 3001);

// Routes

app.get('/api/tweets/:from/:to', async (req, res) => {
  console.log('params', req.params.from, req.params.to);
  const data = await TwitterFetch(data => res.send(data));
  console.log(data);
  res.send(data);
});

// app.get('/api/tweets/:from/:to', async (req, res) => {
//   const TFLUrl = 'https://api.tfl.gov.uk/Journey/JourneyResults/sw15%204jj/to/EC2M%207PP?journeyPreference=LeastTime&accessibilityPreference=NoSolidStairs&app_key=0a5a732a8d1cc7964db465db7c9c5223&app_id=c0da7c08';

//   console.log('params', req.params.from, req.params.to);
//   fetch(TFLUrl)
//     .then(response => response.json())
//     .then(data => res.send(data));
// });

app.listen(app.get('PORT'), () => console.log(`server working on port ${app.get('PORT')}`));
