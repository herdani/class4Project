const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');
// const password = require('../../config');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1984Fkek',
    database: 'class4project',
});
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

// Get all messages
const SELECT_ALL_MESSAGES_QUERY = 'SELECT * FROM messages';
apiRouter.get('/messages', (req, res) => {
    connection.query(SELECT_ALL_MESSAGES_QUERY, (err, results) => {
        if (err) {
            return res.send(err);
        }
        return res.json({
            messages: results,
        });
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
// Delete an message
apiRouter.delete('/message/:id', (req, res) => {
    connection.query(
        'DELETE FROM messages WHERE id = ?',
        [req.params.id],
        (err, rows, fields) => {
            if (!err) res.send('Deleted successfully.');
            else console.log(err);
        }
    );
});

// Application initialization

module.exports = apiRouter;
