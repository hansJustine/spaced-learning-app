const Learner = require('../models/Learner');
const CustomError = require('../utils/CustomError');

module.exports.signupController = async (req, res) => {
    const signupInfo = req.body.signupInfo;
    const newLearner = await Learner.create(signupInfo);
    sendToken(newLearner, res, 200);
}
module.exports.loginController = async (req, res) => {
    const { email, password } = req.body.loginInfo;
    const foundLearner = await Learner.findOne({ email }).select('+password');
    console.log(foundLearner)
    if (!foundLearner) throw new CustomError('Invalid email or password', 401);
    const isMatch = await foundLearner.isPasswordMatch(password);
    if (!isMatch) throw new CustomError('Invalid email or password', 401);
    sendToken(foundLearner, res, 200);
}

function sendToken(learner, res, statusCode = 200) {
    const token = learner.getSignedJwt();
    res.status(statusCode).json({ token });
}