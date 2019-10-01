const loginCredentials = require('./loginDB')

const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

apiRouter.use(bodyParser.json());


var urlencodedParser = bodyParser.urlencoded({ extended: false });

// const whitelist = ['http://localhost:3000'];
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1 || !origin) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'))
//         }
//     }
// };
apiRouter.use(cors());
// ./loginDB file is created in api folder, and added to gitignore.
//Enter your own login credentials for your MySql database in that file, so no hard coding will be required after push/pull.
const connection = mysql.createConnection(loginCredentials);

connection.connect();

apiRouter.get("/", function(req, res) {

  let sql = `SELECT * FROM messages where deleted = ?`;
    connection.query(sql, [false], (error, results) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
});
});



apiRouter.delete("/message/:id", urlencodedParser,function(req, res) {
  const {id} = req.params;
  var sql= "UPDATE messages SET deleted = 1 WHERE id = ?"
  
   connection.query( sql, [id], function (error, result) {
    if (error) throw error;
    console.log(id, " Deleted!")
    
  });
  
  //  connection.end();
  
  
  });
// add new message
apiRouter.post('/message/add', (req, res) => {
    console.log(req.body);
    const {body} = req.body;
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

module.exports = apiRouter;