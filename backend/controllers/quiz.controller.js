import QuizResult from '../models/QuizResult.js';

export const saveQuizResult = async (req, res) => {
  try {
    const { answers, results, topCareer } = req.body;

    const quizResult = await QuizResult.create({
      user: req.user.id,
      answers,
      results,
      topCareer
    });

    res.status(201).json({
      success: true,
      quizResult
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getQuizResults = async (req, res) => {
  try {
    const quizResults = await QuizResult.find({ user: req.user.id })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      quizResults
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};