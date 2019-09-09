// Path: server/app.js
// Purpose of file: To initialize Express and create basic endpoints
const express = require('express'); // Loading in Express functionality
// error    `path` import should occur before import of `./api`
const path = require('path');
const apiRouter = require('./api'); // Loading in our custom index.js from /api (it will automatically look for index.js)

const app = express(); // Creating an Express instance

app.use('*', function logGetRequests(req, res, next) {
    // eslint-disable-next-line no-console
    console.log('someone made a request with GET method');
    next();
});

app.get('/api', apiRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('index page, triggered by GET /');
});

module.exports = app;
