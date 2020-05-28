const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: process.env.CLIENT_APP_ORIGIN,
};
app.use(cors(corsOptions));

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.get('/api/meme', (req, res) => res.json({
  title: 'Node.js debugging meme',
  pictureUrl: 'https://miro.medium.com/max/1000/1*9bDq6pyYoXa39QxldAkf-g.jpeg'
}));

app.listen(process.env.PORT, (err) => {
  console.log('starting up server', err);
});
