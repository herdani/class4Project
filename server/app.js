// Purpose of file: To initialize Express and create basic endpoints
const express = require('express'); // Loading in Express functionality
const path = require('path');
const apiRouter = require('./api'); // Loading in our custom index.js from /api (it will automatically look for index.js)

const app = express(); // Creating an Express instance

app.use('*', function logGetRequests(req, res, next) {
    // eslint-disable-next-line no-console
    console.log('someone made a request with ANY method');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.get('/', function(req, res) {
    res.send('index page, triggered by GET /');
});

app.get('*', function(req, res) {
    res.status(404).send('Not found');
});

module.exports = app;
