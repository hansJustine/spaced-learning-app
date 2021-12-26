const jwt = require('jsonwebtoken');
const CustomError = require('../utils/CustomError');

module.exports = async function authenticateToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) next(new CustomError('You are not authorized', 403));
    try {
        const learner = await jwt.verify(token, process.env.JWT_ACCESS_TOKEN);
        req.learner = learner;
        return next();
    } catch (err) {
        next(new CustomError(err, 403));
    }
} 