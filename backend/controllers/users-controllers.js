const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

const getUsers = async (req, res, next) => {
    let users;

    try {
        users = await users.find({})
    } catch(err){
        const error = new HttpError(
            "Fetching users failed, please try again later.",
            500
        );
        return next(error)
    }
}