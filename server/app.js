// Purpose of file: To initialize Express and create basic endpoints
const express = require('express'); // Loading in Express functionality
const path = require('path');
const apiRouter = require('./api'); // Loading in our custom index.js from /api (it will automatically look for index.js)

const app = express(); // Creating an Express instance
const cors = require('cors');

const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
 };
 app.use(cors(corsOptions));

app.use('*', function logGetRequests(req, res, next) {
    // eslint-disable-next-line no-console
    console.log('someone made a request with another method');
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
