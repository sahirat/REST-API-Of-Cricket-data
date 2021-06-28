const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    rank: {
        type: Number,
        required: true,
        unique:true
   },
    player: {
        type: String,
        required: true,
        trim:true
    },
    team: {
        type: String,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
    },
})

module.exports =new mongoose.model('player', playerSchema);