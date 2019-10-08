require('dotenv').config();
const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const loginCredentials= require('./loginDB')

// ./loginDB file is created in api folder, and added to gitignore.
// Enter your own login credentials for your MySql database in that file, so no hard coding will be required after push/pull.
const connection = mysql.createConnection(loginCredentials);
connection.connect();
apiRouter.use(bodyParser.json());

// Used list_existing_messages
apiRouter.get('/', function(req, res) {
    const insertMessage = `SELECT * FROM messages where deleted=0;`;
    connection.query(insertMessage, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

apiRouter.get('/message/all', function(req, res) {
    const insertMessage = `SELECT * FROM messages`;
    connection.query(insertMessage, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

apiRouter.get('/message/:license_plate', cors(), (req, res)=> {

    const sql = `SELECT body, submission_date, license_plate FROM messages where license_plate = ?`;
      connection.query(sql, [req.params.license_plate], (error, results) => {
          if (error) {
              return console.error(error.message);
          }
          res.send(results);
  });
  });
// Post Message
apiRouter.post('/message/add', (req, res) => {
    console.log(req.body);
    const {body} = req.body;
    const { license_plate } = req.body;
    const insertMessage = `INSERT INTO messages (body, submission_date, license_plate) VALUES (?,now(),?);`;
    connection.query(insertMessage, [body, license_plate], (err, result) => {
        if (err) throw err;
        console.log(`post request made: ${result}`);
        res.send(result);
    });
    //
    const api_key = '637309d8094f9b578d6f7a68cfd5d181-baa55c84-d6fb89fe';
    const domain = 'sandboxba59f9aaff77478d9b4c22a8f7ee1ee2.mailgun.org';

    const mailgun = require('mailgun-js')({ apiKey: api_key, domain });

    const data = {
        from:
            'class4Project <mailgun@sandboxba59f9aaff77478d9b4c22a8f7ee1ee2.mailgun.org>',
        to: 'avci.msena@gmail.com',

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

// Delete Message
apiRouter.delete('/message/:id', (req, res) => {
    const { id } = req.params;
    const changeBoolean = `update messages set deleted = "1" where id = '${id}'`;

    connection.query(changeBoolean, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Application initialization

module.exports = apiRouter;