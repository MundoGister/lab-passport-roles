const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const FIRST_ADMIN_EMAIL = process.env.FIRST_ADMIN_EMAIL;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    email: {
        type: String,
        required: "Email is required",
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true
    },
    password: {
        type: String,
        required: "Password is required"
    },
    role: {
        type: String,
        enum: ['BOSS', 'DEVELOPER', 'TA'],
        default: 'DEVELOPER'
    }
}, {timestamp: true});

const User = mongoose.model('User', userSchema);

module.exports = User;