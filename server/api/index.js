
const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'senAfrika93',
  database: 'class4project',
});

connection.connect();

// parse application/json
apiRouter.use(bodyParser.json());

apiRouter.get('/', function (req, res) {
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

  mailgun.messages().send(data, function (error, body) {
    if (error) {
      console.log(error);
    }
    else {
      console.log(body);
    }

  });
});

// Application initialization

module.exports = apiRouter;
