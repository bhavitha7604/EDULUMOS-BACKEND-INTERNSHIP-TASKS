const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrls');
const app = express();

mongoose.connect('mongodb://localhost:27017/urlShortener');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render('index', { shortUrls: shortUrls });
});

app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl });
  res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  await shortUrl.save();

  res.redirect(shortUrl.full);
});

app.listen(5500, () => {
  console.log('Server running on http://localhost:5500');
});