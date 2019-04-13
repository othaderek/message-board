// this is how you add all of your dependencies to your app
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const messages = require('./db/messages');

// Middleware
// invoke express
const app = express();
// Morgan is a logging package; how you add logger to app. tiny is the type of logger. 
app.use(morgan('tiny'));
app.use(cors());
// Now our server can accept json being sent from the client.
app.use(bodyParser.json());
// When a get request comes into our server with the url slash, this is going to run.
app.get('/', (req, res) => {
	res.json({
		message: 'Fullstack Message Board!'
	});
});

app.get('/messages', (req, res) => {
	messages.getAll().then((messages) => {
		res.json(messages);
	}).catch((error) => {
		res.status(500);
		res.json(error);
	});

});

app.post('/messages', (req, res) => {
	console.log(req.body);
	messages.create(req.body).then((message) => {
		res.json(message);
	})
});

const port = process.env.PORT || 1234;
app.listen(port, () => {
	console.log(`listening on ${port}`);
});
