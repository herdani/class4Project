const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nihan',
  password: '12345',
  database: 'class4Project',
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
    console.log('post request made: ' + result);
    res.send(result);
  });
});

apiRouter.put('/message/:id', (req, res) => {
  const sql =
    `UPDATE messages SET body='${
    req.body.body
    }', license_plate='${
    req.body.license_plate
    }' WHERE id=${
    req.params.id}`;
  const query = connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(
      JSON.stringify({ status: 200, error: null, response: results })
    );
  });
});

// Application initialization

module.exports = apiRouter;
