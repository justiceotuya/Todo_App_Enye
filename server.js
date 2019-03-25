const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
var cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);

app.get('/', (req, res) => {
  res.type('application/json');
  res.setHeader('Content-Type', 'application/json');
  return res.send(JSON.stringify({ items: ['eat', 'dance', 'sleep', 'read', 'go to the market'] }));
});

app.listen(5000, () => console.log('Express server is running on localhost:5000'));
