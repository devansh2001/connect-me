const express = require('express');
const cors = require('cors');

var bodyParser = require('body-parser');
const http = require('http');
const socketIO = require('socket.io');

const mongoose = require('mongoose');
// to use environment variables; we may not need it but just in case
require('dotenv').config();

const app = express();
const port = 8080;

//mongodb atlas configuration
const connectionString = "mongodb+srv://connect123:connect123@connect-me-xh3xg.mongodb.net/test?retryWrites=true&w=majority";
const connector = mongoose
   .connect(connectionString, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true})
   .then(() => console.log("Connected to MongoDB Atlas"))
   .catch((err) => {console.log("Couldn't connect to MongoDB Atlas: ", err)});

// enable cross origin resource sharing so that server can be acessed from anywhere
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
const createUserRouter = require('./routes/CreateUser');
const loginRouter = require('./routes/LoginRouter');

app.use('/test', testRouter);
app.use('/send-message', sendMessageRouter);
app.use('/create-user', createUserRouter);
app.use('/login', loginRouter);

let clients = new Map();

io.on('connect', socket => {
   clients.set(socket.handshake.query.name, socket.id);
   console.log(clients);

   console.log('Client connected');


   socket.on('message_to_server', (info) => {
      // console.log(info);
      // console.log(socket.id);
      socket.emit('magic_event', socket.id);
      console.log('Server logging triggered event');
      console.log("Sending to : " + info['to'] + " - " + clients.get(info['to']));

      // if the socket id for this user DNE, then push to the DB
      // else send message to user in real time
      io.to(clients.get(info['to'])).emit('message_to_client', info);
   });

   socket.on('disconnect', () => {
      clients.delete(socket.handshake.query.name);
      console.log(clients);
      console.log('Client disconnected');
   })
});

const dbTestRouter = require('./routes/test-db');
app.use('/test-db', dbTestRouter);

// starts listening
server.listen(port, () => {
   console.log('ConnectMe Server is running on port: ' + port);
});
