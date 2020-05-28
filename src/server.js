const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

app.listen(process.env.PORT, (err) => {
  console.log('starting up server', err);
});
