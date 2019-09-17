/* eslint-disable no-console */
/* eslint-disable camelcase */
const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');
require('../config');
const cors = require('cors');

apiRouter.use(cors());
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD,
    database: 'class4project',
});

connection.connect(err => {
    if (err) {
        throw err;
    }
    console.log(` ${connection.state} : ${connection.threadId} `);
});

// parse application/json
apiRouter.use(bodyParser.json());

// Get All Messages from DB
apiRouter.get('/', function(req, res) {
    const selectAll = `select * from messages;`;
    connection.query(selectAll, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Get info Database Upon id number (After it can be changed acc. to license_plate)
apiRouter.get('/message/:id', function(req, res) {
    const { id } = req.params;
    const showId = `select * from messages where id=${id};`;
    connection.query(showId, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Post new Message
apiRouter.post('/message/add', (req, res) => {
    const { body } = req.body;
    const { license_plate } = req.body;
    const insertMessage = `INSERT INTO messages (body, submission_date, license_plate) VALUES ('${body}',NOW(), '${license_plate}');`;
    const showAll = `select * from messages;`;
    connection.query(insertMessage, function(err, result) {
        if (err) {
            throw err;
        } else {
            connection.query(showAll, (err, result) => {
                if (err) throw err;
                res.json(result);
            });
        }
    });
});

// Edit Message with the specific id --- NOT FINISHED
// apiRouter.put('/:id', function(req, res) {
//     const { id } = req.params;
//     const { body } = req.body;
//     const { license_plate } = req.body;
//     const showId = `select * from messages where id=${id};`;
//     const updateBody = `UPDATE messages SET body = '${body}' WHERE id=${id};`;
//     const updateLicense = `UPDATE messages SET body = '${license_plate}' WHERE id=${id};`;
//     connection.query(showId, (err, result) => {
//         if (err) throw err;
//         connection.query();
//         res.json(result);
//     });
// });

// Application initialization

module.exports = apiRouter;
