const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
// to use environment variables; we may not need it but just in case
require('dotenv').config();

const app = express();
const port = 8080;

// does something with security
app.use(cors());

// lets app use JSON to communicate with client(s)
app.use(express.json());

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
   extended: true
}));
const testRouter = require('./routes/test');
const sendMessageRouter = require('./routes/SendMessage');

app.use('/test', testRouter);
app.use('/send-message', sendMessageRouter);

// starts listening
app.listen(port, () => {
   console.log('ConnectMe Server is running on port: ' + port);
});
