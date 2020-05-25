const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');
// to use environment variables; we may not need it but just in case
require('dotenv').config();

const app = express();
const port = 8080;

// does something with security
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server);

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

io.on('connection', socket => {
   console.log('Client connected');

   socket.on('disconnect', () => {
      console.log('Client disconnected');
   })
});


// starts listening
server.listen(port, () => {
   console.log('ConnectMe Server is running on port: ' + port);
});
