const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 60,
        trim: true,
    },
   password: {

   }
    

})

const User = model('User', userSchema);

module.exports = User;