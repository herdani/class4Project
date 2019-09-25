const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1984Fkek',
    database: 'class4project',
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
        console.log(`post request made: ${  result}`);
        res.send(result);
    });
    //
    const api_key = 'f4ed4318fedd5e200e49a54cf8496df3-baa55c84-2d5ee176';
    const domain = 'sandbox6062f7c6d10b4b29b35da1c0c31e7721.mailgun.org';
    const mailgun = require('mailgun-js')({ apiKey: api_key, domain });

    const data = {
        from:
            'FaziletKosure <mailgun@sandbox6062f7c6d10b4b29b35da1c0c31e7721.mailgun.org>',
        to: 'faziletkosure1@gmail.com',
        // to: 'fnakkose@hotmail.com',
        // bcc: 'avci.msena@gmail.com',
        subject: req.body.license_plate,
        text: req.body.body,
    };

    mailgun.messages().send(data, function(error, body) {
        console.log(body);
    });
});

// Application initialization

module.exports = apiRouter;
