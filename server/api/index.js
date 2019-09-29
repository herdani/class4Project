const loginCredentials = require('./loginDB')

const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');

// ./loginDB file is created in api folder, and added to gitignore.
//Enter your own login credentials for your MySql database in that file, so no hard coding will be required after push/pull.
const connection = mysql.createConnection(loginCredentials);

connection.connect();

// parse application/json
apiRouter.use(bodyParser.json());

// Used list_existing_messages
apiRouter.get('/', function(req, res) {
    const insertMessage = `SELECT * FROM messages;`;
    connection.query(insertMessage, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// add new message
apiRouter.post('/message/add', (req, res) => {
    const { body } = req.body;
    const { license_plate } = req.body;
    const insertMessage = `INSERT INTO messages (body, submission_date, license_plate) VALUES (?,now(),?);`;
    connection.query(insertMessage, [body, license_plate], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});


// Application initialization

module.exports = apiRouter;
