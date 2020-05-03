const router = require('express').Router();

router.route('/').get((request, response) => {
    response.json({'response' : 'Hello, World!'});
});

module.exports = router;