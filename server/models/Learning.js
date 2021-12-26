const mongoose = require('mongoose');

const LearningSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Enter a title']
    },
    reviewTimeline: [
        {
            forgettingDays: Number,
            date: Date
        }
    ],
    learningMaterials: [],
    learner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Learner'
    }
});

module.exports = mongoose.model('Learning', LearningSchema);
