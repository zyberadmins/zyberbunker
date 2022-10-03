const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const loginRouter = require('./routes/login');
const apiPath = "/v1";

//init express
const app = express();
//set value for PORT
const PORT = process.env.PORT || 8001;

app.use(express.static(__dirname + '/public'));
//use logger
app.use(logger('dev'));

//use CORS
app.use(cors());

//use body-parser for HTTP POST requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(`/`, loginRouter);
app.use(`${apiPath}/login`, loginRouter);

//init server on the defined PORTusr
app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

//initDatabaseStucture
require('./createDatabase');

module.exports = app;
