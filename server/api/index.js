<<<<<<< HEAD
const loginCredentials = require('./loginDB')

=======

require('dotenv').config();
>>>>>>> 63c0391deca7612840eb09d59288de8dd4c85ab8
const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

<<<<<<< HEAD
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
=======

// ./loginDB file is created in api folder, and added to gitignore.
// Enter your own login credentials for your MySql database in that file, so no hard coding will be required after push/pull.
const connection = mysql.createConnection({
>>>>>>> 63c0391deca7612840eb09d59288de8dd4c85ab8

    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_USERPASS,
    database: process.env.DB_NAME,

});
connection.connect();

apiRouter.get("/", function(req, res) {

<<<<<<< HEAD
  let sql = `SELECT * FROM messages where deleted = ?`;
    connection.query(sql, [false], (error, results) => {
        if (error) {
            return console.error(error.message);
        }
        res.send(results);
});
=======

// Used list_existing_messages
apiRouter.get('/', function(req, res) {
    const insertMessage = `SELECT * FROM messages;`;
    connection.query(insertMessage, (err, result) => {
        if (err) throw err;
        res.json(result);
    });

>>>>>>> 63c0391deca7612840eb09d59288de8dd4c85ab8
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
<<<<<<< HEAD
        /*  console.log(`post request made: ${result}`); */
=======
        console.log(`post request made: ${result}`);
>>>>>>> 63c0391deca7612840eb09d59288de8dd4c85ab8
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

    mailgun.messages().send(data, function(error, body) {
        if (error) {
            console.log(error);
        } else {
            console.log(body);
        }
    });
});

/* console.log(apiRouter.result); */

// Application initialization

module.exports = apiRouter;