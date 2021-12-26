const express = require('express');
const router = express.Router();
const catchAync = require('../utils/catchAsync');
const { loginController, signupController } = require('../controllers/authControllers');

router.post('/signup', catchAync(signupController));
router.post('/login', catchAync(loginController));


module.exports = router;