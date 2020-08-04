const mongoose = require('mongoose');
const Users = new mongoose.Schema({
    name: {
        type: String,
        default: 'TestName'
    },
    password: {
        type: String,
        default: 'TestPassword'
    }
});

const UsersTest = new mongoose.model("UsersTest", Users);
module.exports = UsersTest;