const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    birthDate: {
        type: Date,
        required: true
    },
    phoneNumber: {
        type: String
    },
    nbProposal: {
        type: Number,
        default: 0
    },
    nbSent: {
        type: Number,
        default: 0
    },
    ethereumAccount: {
        type: String
    }
}, { timestamps: true});

const User = mongoose.model('User', userSchema);

module.exports = User;