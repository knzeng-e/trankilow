const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const travelSchema = new Schema({
    userId: Schema.ObjectId,
    from: { type: String, required: true, trim: true },
    to: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    capacity: { type: Number, required: true },
    isActive: { type: Boolean, default: true }
}, { timestamps: true });

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;