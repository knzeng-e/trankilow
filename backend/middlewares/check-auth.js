const HttpError = require('../models/http-error');
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1] // Authorization: 'Bearer Token'
        if (!token) {
            throw new Error('Authentication failed !');
        }
        //Verify if the received token is valid
        jwt.verify(token, tokenPrivateKey)
    } catch (err) {

            const error = new HttpError('Authentication failed !', 401);
    
            return next(error);
    }

}