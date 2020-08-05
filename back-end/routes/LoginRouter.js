const router = require('express').Router();;
const UsersTest = require('../models/UserModel');

router.route('/').get((request, res) => {
    console.log('Logging in User');
    // let username = request.body['username'];
    // let password = request.body['password'];

    // const users = new UsersTest({name: username,
    //     password: password,
    //     email: emailId,
    //     firstName: firstName,
    //     lastName: lastName
    // });

    UsersTest.find({
        email: request.query['email']
        // password: request['password']
    }, (err, user) => {
        if (err) {
            res.status(500).send({err: 'Cannot find user'});
        } else {
            console.log(user);

            res.status(200).send(user);
        }
    });
});

module.exports = router;