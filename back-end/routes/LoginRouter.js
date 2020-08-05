const router = require('express').Router();;
const UsersTest = require('../models/UserModel');

router.route('/').get((request, res) => {
    console.log('Logging in User');

    UsersTest.find({
        username: request.query['username']
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