const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const LearnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter a name']
    },
    username: {
        type: String,
        required: [true, 'Enter a username'],
        unique: true
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Enter a phone number']
    },
    email: {
        type: String,
        required: [true, 'Enter an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Enter a password'],
        min: 8,
        select: false
    },
    learnings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Learning'
        }
    ]
});

LearnerSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
})

LearnerSchema.methods.getSignedJwt = function () {
    return jwt.sign({ id: this._id, name: this.name, email: this.email }, process.env.JWT_ACCESS_TOKEN, { expiresIn: process.env.JWT_EXPIRATION });
}

LearnerSchema.methods.isPasswordMatch = async function (password) {
    return await bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('Learner', LearnerSchema);