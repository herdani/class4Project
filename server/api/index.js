const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'class4Project',
});

connection.connect();

// parse application/json
apiRouter.use(bodyParser.json());

apiRouter.get('/', function (req, res) {
  res.send('triggered by GET /api/ path');
});

apiRouter.post('/message/add', function (req, res) {
  const message = req.body.body;
  console.log(req.body.body);
  const license = req.body.license_plate;

  connection.query(`INSERT INTO messages(body, submission_date, license_plate)
  VALUES ('${message}', NOW(), '${license}')`, function (err, rows, fields) {
      if (err) throw err
    });
  res.send(req.body);


});

// Application initialization



module.exports = apiRouter;
