// Path: server/api/index.js
// Purpose of file: To contain all our routes and necessary logic
const bodyParser = require('body-parser')
const apiRouter = require("express").Router();
const mysql = require('mysql');
const cors = require('cors');

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

    var sql = 'INSERT INTO messages (body, submission_date, license_plate) VALUES (?, ?, ?)';

    connection.query(sql, [message, submission_date, license_plate], function(
        error,
        results
    ) {
  if (error) throw error;
  console.log('The solution is: ' + results);
});
 
 

 res.send(results);
 
//  connection.end();


});

apiRouter.delete("/message/:id", urlencodedParser,function(req, res) {
  const {id} = req.body
 
  var sql= "UPDATE messages SET deleted = 1 WHERE id = ?"
  
   connection.query( sql, [id], function (error, result) {
    if (error) throw error;
  });
  
  //  connection.end();
  
  
  });

module.exports = apiRouter;