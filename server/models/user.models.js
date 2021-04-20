const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required."],
        minlength: [3, "First name must be at least 3 characters."]
    },

    lastName: {
        type: String,
        required: [true, "Last name is required."],
        minlength: [3, "Last name must be at least 3 characters."]
    },

    userName: {
        type: String,
        required: [true, "Username is required."],
        minlength: [3, "Username must be at least 3 characters."]
    },

    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
        minlength: [6, "Email must be at least 6 characters."]
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters."]
    },
}, { timestamps: true });

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema);
