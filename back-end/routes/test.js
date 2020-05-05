const router = require('express').Router();

// NOTE 1:
// the route '/' means once it reaches the '/test' endpoint, nothing else is added to it for this endpoint to trigger
// for example, if we wanted to have 2 endpoints: /test/test_1 and /test/test_2:
// then we would have one chunk of the following code with router.route('/test_1') and another with router.route('/test_2')

// NOTE 2:
// the .get() is present because this is a GET endpoint.
// if we wanted a POST or DELETE endpoint, we would use .post() or .delete() instead
router.route('/').get((request, response) => {
    response.json({'response' : 'Hello, World!'});
});

module.exports = router;