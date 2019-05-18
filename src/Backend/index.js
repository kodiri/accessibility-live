// Helpers
const express = require('express');
const fetch = require('node-fetch');
const TwitterFetch = require('./helpers/TwitterFetch');
require('dotenv').config();

const app = express();

// Settings
app.set('PORT', process.env.PORT || 3001);

// Routes
app.get('/api/tweets', async (req, res) => {
  const tweets = await TwitterFetch();
  res.send(tweets);
});

app.get('/api/tfl/PostCode/:from/:to', async (req, res) => {
  const { from, to } = req.params;
  const id = process.env.TLF_ID;
  const key = process.env.TLF_KEY;
  const TFLUrl = `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}?journeyPreference=LeastTime&accessibilityPreference=NoSolidStairs&app_key=${key}&app_id=${id}`;

  fetch(TFLUrl)
    .then(response => response.json())
    .then((data) => {
      const { journeys } = data;
      const newJourney = journeys.map(journey => journey.legs.map(leg => leg.instruction.summary));
      return newJourney;
    })
    .then(data => res.send(data));
});

app.get('/api/tfl/StationName/:from/:to', async (req, res) => {
  const { from, to } = req.params;
  const id = process.env.TLF_ID;
  const key = process.env.TLF_KEY;
  const TFLUrl = `https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}?journeyPreference=LeastTime&accessibilityPreference=NoSolidStairs&app_key=${key}&app_id=${id}`;

  fetch(TFLUrl)
    .then(response => response.json())
    .then((data) => {
      const to_parameterValue = data.toLocationDisambiguation.disambiguationOptions[0].parameterValue;
      const from_parameterValue = data.fromLocationDisambiguation.disambiguationOptions[0].parameterValue;
      const newTFLUrl = `https://api.tfl.gov.uk/Journey/JourneyResults/${from_parameterValue}/to/${to_parameterValue}?journeyPreference=LeastTime&accessibilityPreference=NoSolidStairs&app_key=${key}&app_id=${id}`;
      fetch(newTFLUrl)
        .then(response => response.json())
        .then((Data) => {
          const { journeys } = Data;
          const newJourney = journeys.map(journey => journey.legs.map(leg => leg.instruction.summary));
          return newJourney;
        })
        .then(journey => res.send(journey));
    });
});

app.listen(app.get('PORT'), () => console.log(`server working on port ${app.get('PORT')}`));
