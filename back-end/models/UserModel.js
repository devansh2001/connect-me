const mongoose = require('mongoose');
const Users = new mongoose.Schema({
    name: {
        type: String,
        default: 'TestName'
    },
    password: {
        type: String,
        default: 'TestPassword'
    },
    email: {
        type: String,
        default: 'test@test.com'
    },
    firstName: {
        type: String,
        default: 'TestFirst'
    },
    lastName: {
        type: String,
        default: 'TestLast'
    }

});

const UsersTest = new mongoose.model("UsersTest", Users);
module.exports = UsersTest;