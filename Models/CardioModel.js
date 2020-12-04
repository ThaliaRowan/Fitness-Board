const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardioSchema = new Schema({

    ExerciseType: {
        type: String,
        trim: true,
        required: true
    },

    Name: {
       type: String,
       trim: true,
       required: true 
    },

    Distance: {
     type: Number,
     required: true
    }, 

    Duration: {
        type: Number,
        required: true
    },

});

const Cardio = mongoose.Model('Cardio', CardioSchema);

module.exports = Cardio;