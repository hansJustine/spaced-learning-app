const Learner = require('../models/Learner');
const Learning = require('../models/Learning');
const CustomError = require('../utils/CustomError');
const { createReviewTimeline } = require('../utils/createReviewTimeline');

module.exports.getLearnings = async (req, res) => {
    const learner = await Learner.findById(req.learner.id).populate('learnings');
    if (!learner) throw new CustomError('User does not exist.', 404);
    res.status(200).json({ learnings: learner.learnings });
}

module.exports.createLearning = async (req, res) => {
    const foundLearner = await Learner.findById(req.learner.id);
    if (!foundLearner) throw new CustomError('User does not exist.', 404);
    const { title, learningMaterials } = req.body.createLearning;
    const dateNow = new Date();
    const reviewTimeline = [{ forgettingDays: 0, date: dateNow }];
    await createReviewTimeline(reviewTimeline);
    const newLearning = await Learning.create({ title, learningMaterials, reviewTimeline, learner: foundLearner });
    foundLearner.learnings.push(newLearning);
    await foundLearner.save();
    res.status(201).json({ learning: newLearning });
}

module.exports.updateLearning = async (req, res) => {
    const { title, learningMaterials } = req.body.updateLearning;
    const updatedLearning = await Learning.findByIdAndUpdate(req.params.id, { title, learningMaterials }, { new: true });
    if (!updatedLearning) throw new CustomError('Learning does not exist.', 404);
    res.status(201).json({ updatedLearning });
}

module.exports.deleteLearning = async (req, res) => {
    const foundLearning = await Learning.findById(req.params.id);
    if (!foundLearning) throw new CustomError('Learning does not exist.', 404);
    const foundLearner = await Learner.findByIdAndUpdate(foundLearning.learner, { $pull: { learnings: foundLearning._id } }, { new: true });
    if (!foundLearner) throw new CustomError('User does not exist.', 404);
    const deletedLearning = await Learning.findByIdAndDelete(foundLearning._id);
    console.log(foundLearner);
    res.status(204).json({ deletedLearning });
}
