const mongoose = require('mongoose');

const ChirpSchema = new mongoose.Schema({
    chirp: {
        type: String,
        required: [true, "This project needs a name."],
        minLength: [3, "Name must be at least 3 characters."]
    },
    creator_id: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    numOfLikes: {
        type: Number,
        default: 1
    },
    dateTime: {
        type: Date,
    }
}, {timestamps: true});


module.exports = mongoose.model('Chirp', ChirpSchema);