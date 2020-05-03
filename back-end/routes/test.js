const router = require('express').Router();

router.route('/test').get((request, response) => {
    response.json({'response' : 'Hello, World!'});
});

module.exports = router;