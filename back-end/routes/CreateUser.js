const router = require('express').Router();;

router.route('/').post((request, response) => {
    console.log('Creating User');
    let username = request.body['username'];
    let password = request.password['password'];
    let emailId = request.body['emailId'];
    let firstName = request.body['firstName'];
    let lastName = request.body['lastName'];

    // Code to verify if there is a user with same username or email Id already in the DB


    // Code to save the fields in the database






});

module.exports = router;