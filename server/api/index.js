
const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const password = require('../../config');

<<<<<<< HEAD
const connection = mysql.createConnection(password);
=======
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'class4project',
});
>>>>>>> 0e37946a7815605f966a5806c5e30afb2dde32f8
connection.connect(err => {
    if (!err) console.log('DB connection succeded.');
    else
        console.log(
            `DB connection failed \n Error : ${JSON.stringify(
                err,
                undefined,
                2
            )}`
        );
});

// parse application/json
apiRouter.use(bodyParser.json());

apiRouter.get('/', function(req, res) {
    res.send('triggered by GET /api/ path');
});

apiRouter.post('/message/add', function(req, res) {
    const message = req.body.body;
    console.log(req.body);
    const license = req.body.license_plate;

    connection.query(
        `INSERT INTO messages(body, submission_date, license_plate)
  VALUES ('${message}', NOW(), '${license}')`,
        function(err, rows, fields) {
            if (err) throw err;
        }
    );
    res.send(req.body);
});

// Application initialization

module.exports = apiRouter;
