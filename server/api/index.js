const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'class4project',
});

connection.connect();

// parse application/json
apiRouter.use(bodyParser.json());

apiRouter.get('/', function(req, res) {
    res.send('triggered by GET /api/ path');
});

// Post Message
apiRouter.post('/message/add', (req, res) => {
    const { body } = req.body;
    const { license_plate } = req.body;
    const insertMessage = `INSERT INTO messages (body, submission_date, license_plate) VALUES (?,now(),?);`;
    connection.query(insertMessage, [body, license_plate], (err, result) => {
        if (err) throw err;
        console.log(`post request made: ${result}`);
        res.send(result);
    });
});

// Delete Message
apiRouter.delete('/message/delete', (req, res) => {
    const { id } = req.body;
    console.log(id);
    const showAll = `select * from messages;`;
    const changeBoolean = `update messages set deleted = "1" where id = '${id}'`;

    connection.query(showAll, (err, result) => {
        if (err) {
            throw err;
        } else
            connection.query(changeBoolean, (err, resBool) => {
                if (err) throw err;
                res.json(resBool);
            });
    });
});
// Application initialization

module.exports = apiRouter;
