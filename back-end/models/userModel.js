const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName:  {type: String},
    phoneNumber: {type:String},
    email: {type:String},
    isActive: {type:Boolean},
    contacts: [String],
    userName: {type: String},
    password: {type: String}
}, {timestamps: true});
//todo modify password field to store hash or oAuth implementation
const UserModel = new mongoose.Model("User", UserSchema);
module.exports = UserModel;