const router = require('express').Router();;
const UsersTest = require('../models/UserModel');

router.route('/').post((request, res) => {
    console.log('Creating User');
    let username = request.body['username'];
    let password = request.body['password'];
    let emailId = request.body['emailId'];
    let firstName = request.body['firstName'];
    let lastName = request.body['lastName'];

    const users = new UsersTest({name: username,
                                password: password,
                                email: emailId,
                                firstName: firstName,
                                lastName: lastName
    });
    users.save((err) => {
        if (err) {
            res.status(500).send({error: "Could not save to DB"});
        } else {
            res.status(200).send(users);
        }
    })
    // Code to verify if there is a user with same username or email Id already in the DB


    // Code to save the fields in the database






});

module.exports = router;