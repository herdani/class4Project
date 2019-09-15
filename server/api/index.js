const apiRouter = require('express').Router();
const bodyParser = require('body-parser');
const mysql = require('mysql');

// parse application/json
apiRouter.use(bodyParser.json())

apiRouter.get('/', function(req, res) {
    res.send('triggered by GET /api/ path');
});

apiRouter.post('/message/add', function(req, res) {
    console.log(req.body);
    res.send(req.body);

    res.send('triggered by POST /api/');
});



// Application initialization

var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'password',
        database : 'class4project',
    });

module.exports = apiRouter;
