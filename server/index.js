// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve the static files from the React app
// // app.use(express.static(path.join(__dirname, 'client/build')));

// // An api endpoint that returns a short list of items
// // app.get('/', (req, res) => {
// // 	var list = ['item1', 'item2', 'item3'];
// // 	res.json(list);
// // 	console.log('Sent list of items');
// // });

// app.get('/test', (req, res) => {
// 	var list = ['item1', 'item2', 'item3'];
// 	res.json(list);
// 	console.log('Sent list of items');
// });

// // Handles any requests that don't match the ones above
// // app.get('*', (req, res) => {
// // 	res.sendFile(path.join(__dirname + '/client/build/index.html'));
// // });

// const port = process.env.PORT || 5000;
// app.listen(port);

// console.log('App is listening on port ' + port);

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
