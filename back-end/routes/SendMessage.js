
// THIS FILE IS REDUNDANT & HENCE NOT USED
// SENDING MESSAGES HAS BEEN HANDLED USING WEBSOCKETS IN /back-end/server.js

const router = require('express').Router();

isEmpty = (data) => {
    return data == null || data.length === 0;
};

router.route('/').post((request, response) => {
    console.log('Received Data:');
    console.log(request.body);

    var message = request.body['message'];
    var fromUser = request.body['sender'];
    var toUser = request.body['receiver'];

    // Check if input received is valid
    if (isEmpty(message) || isEmpty(fromUser) || isEmpty(toUser)) {
        let errNum = 400;
        var json = {
            'error' : errNum,
            'message' : 'Please check your API request!'
        };
        response.status(errNum).send(json);
        return;
    }

    // Success message
    response.status(201).send();
});

module.exports = router;