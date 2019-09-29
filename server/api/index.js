require('dotenv').config();
const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const api_keys = require('./config');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_USERPASS,
    database: process.env.DB_NAME,
});

connection.connect();

// parse application/json
apiRouter.use(bodyParser.json());

apiRouter.get('/', function(req, res) {
    res.send('triggered by GET /api/ path');
});

apiRouter.post('/message/add', (req, res) => {
    const { body } = req.body;
    const { license_plate } = req.body;
    const insertMessage = `INSERT INTO messages (body, submission_date, license_plate) VALUES (?,now(),?);`;
    connection.query(insertMessage, [body, license_plate], (err, result) => {
        if (err) throw err;
        console.log(`post request made: ${result}`);
        res.send(result);
        console.log(process.env.USER_NAME);
    });
    //
    const api_key = api_keys;
    const domain = 'sandbox6062f7c6d10b4b29b35da1c0c31e7721.mailgun.org';
    const mailgun = require('mailgun-js')({ apiKey: api_key, domain });

    const data = {
        from:
            'class4Project <mailgun@sandbox6062f7c6d10b4b29b35da1c0c31e7721.mailgun.org>',
        to: 'faziletkosure1@gmail.com',
        // to: 'fnakkose@hotmail.com',
        // bcc: 'avci.msena@gmail.com',
        subject: `There is a message for ${req.body.license_plate}.`,
        text: req.body.body,
    };

    mailgun.messages().send(data, function(error, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(body);
        }
    });
});

// Application initialization

module.exports = apiRouter;
