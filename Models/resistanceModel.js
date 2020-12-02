const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResistanceSchema = new Schema({
    
    ExerciseName: {
        type: String,
        trim: true,
        required: true
    },

    Weight: {
        type: Number,
        required: true
    },
    
    Sets: {
        type: Number,
        required: true
    },

    Reps: {
        type: Number,
        required: true
    },

    Duration: {
        type: Number,
        required: true
    }
});

const Resistance = mongoose.Model('Resistance', ResistanceSchema);

module.exports = Resistance;