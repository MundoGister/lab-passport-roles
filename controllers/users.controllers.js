const mongoose = require('mongoose');
const User = require('../models/user.model');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
    User.find()
    .then(users => {
        res.render('users/list' , {
            users: users
        });
    })
    .catch(error => next(error));
}

module.exports.create = (req, res, next) => {
    res.render('users/create');
}