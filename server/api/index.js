<<<<<<< HEAD
// Path: server/api/index.js
// Purpose of file: To contain all our routes and necessary logic
const bodyParser = require('body-parser')
const apiRouter = require("express").Router();
=======
const loginCredentials = require('./loginDB')

const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
>>>>>>> 6095a0f9aa2e6cd3f49c74c523e6ee65e8402ed7
const mysql = require('mysql');
const cors = require('cors');

<<<<<<< HEAD
apiRouter.use(bodyParser.json());

const whitelist = ['http://localhost:3000'];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};
apiRouter.use(cors(corsOptions));


var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'abdu',
  password : '123456',
  database : 'class4project'
});
=======
// ./loginDB file is created in api folder, and added to gitignore.
//Enter your own login credentials for your MySql database in that file, so no hard coding will be required after push/pull.
const connection = mysql.createConnection(loginCredentials);
>>>>>>> 6095a0f9aa2e6cd3f49c74c523e6ee65e8402ed7

connection.connect();

apiRouter.get("/", cors(),function(req, res) {

  let sql = `SELECT * FROM messages where deleted = ?`;
    connection.query(sql, [false], (error, results) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
});
});

apiRouter.post('/message/add', urlencodedParser, function(req, res) {
    const { message, license_plate } = req.body;

    const submission_date = new Date()
        .toJSON()
        .slice(0, 19)
        .replace('T', ' ');
    console.log(submission_date);
    console.log(license_plate);
    console.log(message);

<<<<<<< HEAD
    var sql = 'INSERT INTO messages (body, submission_date, license_plate) VALUES (?, ?, ?)';

    connection.query(sql, [message, submission_date, license_plate], function(
        error,
        results
    ) {
  if (error) throw error;
  console.log('The solution is: ' + results);
=======
// Used list_existing_messages
apiRouter.get('/', function(req, res) {
    const insertMessage = `SELECT * FROM messages;`;
    connection.query(insertMessage, (err, result) => {
        if (err) throw err;
        /* console.log(`get request made: ${result}`); */
        res.json(result);
        /* console.log(result); */
    });
>>>>>>> 6095a0f9aa2e6cd3f49c74c523e6ee65e8402ed7
});
 
 

 res.send(results);
 
//  connection.end();


<<<<<<< HEAD
});

apiRouter.delete("/message/:id", urlencodedParser,function(req, res) {
  const {id} = req.body
 
  var sql= "UPDATE messages SET deleted = 1 WHERE id = ?"
  
   connection.query( sql, [id], function (error, result) {
    if (error) throw error;
  });
  
  //  connection.end();
  
  
  });
=======
// add new message
apiRouter.post('/message/add', (req, res) => {
    const { body } = req.body;
    const { license_plate } = req.body;
    const insertMessage = `INSERT INTO messages (body, submission_date, license_plate) VALUES (?,now(),?);`;
    connection.query(insertMessage, [body, license_plate], (err, result) => {
        if (err) throw err;
        /*  console.log(`post request made: ${result}`); */
        res.send(result);
    });
});

/* console.log(apiRouter.result); */

// Application initialization
>>>>>>> 6095a0f9aa2e6cd3f49c74c523e6ee65e8402ed7

module.exports = apiRouter;