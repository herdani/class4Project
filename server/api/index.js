require('dotenv').config();
const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');

// ./loginDB file is created in api folder, and added to gitignore.
// Enter your own login credentials for your MySql database in that file, so no hard coding will be required after push/pull.
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_USERPASS,
    database: process.env.DB_NAME,
});
connection.connect();

// parse application/json
apiRouter.use(bodyParser.json());

// Used list_existing_messages
apiRouter.get('/', function (req, res) {
    const insertMessage = `SELECT * FROM messages;`;
    connection.query(insertMessage, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

apiRouter.post('/message/add', (req, res) => {
    const { body } = req.body;
    const { license_plate } = req.body;
    const insertMessage = `INSERT INTO messages (body, submission_date, license_plate) VALUES (?,now(),?);`;
    connection.query(insertMessage, [body, license_plate], (err, result) => {
        if (err) throw err;
        console.log(`post request made: ${result}`);
        res.send(result);
    });
    //
    const api_key = process.env.Mailgun_api_key;

    const domain = process.env.Mailgun_domain;

    const mailgun = require('mailgun-js')({ apiKey: api_key, domain });

    const data = {
        from:
            'Class4Project <mailgun@sandbox6062f7c6d10b4b29b35da1c0c31e7721.mailgun.org>',
        to: 'faziletkosure1@gmail.com',
        subject: `There is a message for ${req.body.license_plate}.`,
        text: req.body.body,
    };

    mailgun.messages().send(data, function (error, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(body);
        }
    });
});
// UPDATE MESSAGE EditMessage
apiRouter.put('/message/:id', (req, res) => {
    const sql = `UPDATE messages SET body='${req.body.body}', license_plate='${req.body.license_plate}' WHERE id=${req.params.id}`;
    const query = connection.query(sql, (err, results) => {
        // if (err) throw err;
        console.log("[mysql error]", err);
        res.send(
            // JSON.stringify({ status: 200, error: null, response: results })
            results
        );
    });
});

// Get an message
apiRouter.get('/message/:id', (req, res) => {
    connection.query(
        'SELECT * FROM messages WHERE id = ?',
        [req.params.id],
        (err, rows, fields) => {
            if (!err) res.send(rows);
            else console.log(err);
        }
    );
});

// Application initialization

module.exports = apiRouter;
