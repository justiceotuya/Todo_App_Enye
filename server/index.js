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
	const name = req.query.name || 'World';
	res.setHeader('Content-Type', 'application/json');
	return res.send(JSON.stringify({ items: ['eat', 'dance', 'sleep'] }));
});

app.listen(5000, () => console.log('Express server is running on localhost:5000'));
