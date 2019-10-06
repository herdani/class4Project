require('dotenv').config();
const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_USERPASS,
    database: process.env.DB_NAME,
});
connection.connect();

// parse application/json
apiRouter.use(bodyParser.json());

// Used list_existing_messages
apiRouter.get('/', function(req, res) {
    // selecting the data from table 'messages'
    const selectMessages = `SELECT * FROM messages;`;
    connection.query(selectMessages, (err, result) => {
        if (err) throw err;
        // selecting the data from table 'comments' inside the select 'messages'
        // so it will showing comments that belong to a specific message.
        const selectComments = `SELECT * FROM comments;`;
        connection.query(selectComments, (errComments, resultComments) => {
            if (errComments) throw err;
            result.forEach(message => {
                message.comments = resultComments.filter(
                    comment => comment.message_id === message.id
                );
            });
            res.json(result);
        });
    });
});

apiRouter.get('/comments/:message_id', function(req, res) {
    const selectedCommentById = `SELECT * FROM comments WHERE message_id = ${req.params.message_id};`;
    connection.query(selectedCommentById, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Post Message
apiRouter.post('/message/add', (req, res) => {
    const { body, license_plate } = req.body;
    const insertMessage = `INSERT INTO messages (body, submission_date, license_plate) VALUES (?,now(),?);`;
    connection.query(insertMessage, [body, license_plate], (err, result) => {
        if (err) throw err;
        console.log(`post request made: ${result}`);
        res.send(result);
    });

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

// adding send_comments_on_message
apiRouter.post('/comment/add', (req, res) => {
    const { body, email, message_id } = req.body;
    const insertComment = `INSERT INTO comments (body, email, submission_date, message_id) VALUES (?,?,now(),?);`;
    connection.query(
        insertComment,
        [body, email, message_id],
        (err, result) => {
            if (err) throw err;
            console.log(`post request made: ${result}`);
            res.send(result);
        }
    );
});
// Delete Message
apiRouter.delete('/message/:id', (req, res) => {
    const { id } = req.params;
    const changeBoolean = `update messages set deleted = "1" where id = '${id}'`;

    connection.query(changeBoolean, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// Application initialization
module.exports = apiRouter;
