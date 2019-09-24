const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'class4project',
});

connection.connect();

// parse application/json
apiRouter.use(bodyParser.json());

//list_existing_messages
apiRouter.get('/', function(req, res) {
    res.send('triggered by GET /api/ path');
    const insertMessage = `SELECT * FROM messages (body, submission_date, license_plate);`; 
    connection.query(insertMessage, (err, result) => {
        if (err) throw err;
        console.log(`get request made: ${result}`);
        res.send(result);
    }); 
});

//add new message
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

console.log(apiRouter.result);

// Application initialization

module.exports = apiRouter;
