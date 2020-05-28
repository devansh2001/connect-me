const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// to use environment variables; we may not need it but just in case
require('dotenv').config();

const app = express();
const port = process.env.port || 8080;

//mongodb atlas configuration
const connectionString = "mongodb+srv://connect123:connect123@connect-me-xh3xg.mongodb.net/test?retryWrites=true&w=majority";
const connector = mongoose
   .connect(connectionString, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: true})
   .then(() => console.log("Connected to MongoDB Atlas"))
   .catch((err) => {console.log("Couldn't connect to MongoDB Atlas: ", err)});

// enable cross origin resource sharing so that server can be acessed from anywhere
app.use(cors());

// lets app use JSON to communicate with client(s)
app.use(express.json());

const testRouter = require('./routes/test');
const dbTestRouter = require('./routes/test-db');
app.use('/test', testRouter);
app.use('/test-db', dbTestRouter);

// starts listening
app.listen(port, () => {
   console.log('ConnectMe Server is running on port: ' + port);
});
