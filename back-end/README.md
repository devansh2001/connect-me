## Backend Instructions

#### Dependencies
* Download node and check that it has installed properly by running `node -v`
* Download npm (node package manager) from the website (or possible brew?)
* Install some useful libraries by running `npm install express cors dotenv mongoose`
* Install nodemon by running `npm install -g nodemon` (Run with sudo if it doesn't work)

#### Running the backend
* In the **backend** directory, run `nodemon server`
* You should see a message that says 
```
[nodemon] 2.0.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
ConnectMe Server is running on port: 8080
```

#### Verifying Database Connection
* When you run `nodemon server`, you should see a message that says `Connected to MongoDB Atlas`
* The way that the current connection stream is happening is `server.js` has `connectionString ` and `connector` variables which instantiate the connection to Atlas.  
* Important parts of format in `connectionString` would be the MongoDB user name and password.  Currently they are both `connect123`, but these credentials should be erased as we expose the app to more global traffic
* You should use the following end point to test functionality: `localhost:8080/test-db/`
   * The following HTTP Requests are supported on the test endpoint: `GET`, `POST`, and `DELETE`.  Note that `DELETE` will execute a "delete all" to clear the testing collection on MongoDB

#### Programming for New Collections
* The examples in `routes/test-db.js` are relatively self explanatory in terms of format, but there are some things to remember:
    * Use Mongoose Schema when constructing your HTTP endpoints.  Schemas are JSON templates that detail the layout and type of the data. It makes the process of creating endpoints much easier as you can do `<Schema>.<dbFunction>` to make sure that the specific collection is referenced properly and will have a consistent data scheme
    * The main database functions I would think would be used are generally `find` for searching, `save` for pushing to the database, `deleteOne` and `deleteMany` for deletions.  Beyond these, I would look at MongoDB documentation
