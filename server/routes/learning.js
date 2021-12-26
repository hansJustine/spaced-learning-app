const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authenticateToken');
const catchAsync = require('../utils/catchAsync');

const { getLearnings, createLearning, updateLearning, deleteLearning } = require('../controllers/learningControllers');

router.get('/', authenticateToken, catchAsync(getLearnings));
router.post('/', authenticateToken, catchAsync(createLearning));
router.put('/:id', authenticateToken, catchAsync(updateLearning));
router.delete('/:id', authenticateToken, catchAsync(deleteLearning));

module.exports = router;