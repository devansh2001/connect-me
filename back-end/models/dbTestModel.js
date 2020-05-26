const mongoose = require('mongoose');

const DBTestSchema = new mongoose.Schema({
    name: {type:String, default:"Hello MongoDB"}
}, {timestamps: true});
const DBTest = new mongoose.model("DBTest", DBTestSchema);
module.exports = DBTest;