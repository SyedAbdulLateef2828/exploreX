import mongoose from 'mongoose';

const quizResultSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  answers: [{
    questionId: Number,
    category: String,
    value: Number
  }],
  results: [{
    career: String,
    score: Number,
    description: String
  }],
  topCareer: {
    type: String
  },
  completedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);
export default QuizResult;