const router = require('express').Router();

router.route('/').post((request, response) => {
    response.json({'response' : 'Send Message Endpoint'});
});

module.exports = router;