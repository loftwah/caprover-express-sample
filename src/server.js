const express = require('express');
const cors = require('cors');
const dbQuery = require('./db');

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_APP_ORIGIN,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.get('/api/memes', async (req, res) => {
  try {
    const memes = await dbQuery('SELECT id, title, pictureUrl FROM meme');
    res.json(memes);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.listen(process.env.PORT, (err) => {
  console.log('starting up server', err);
});
