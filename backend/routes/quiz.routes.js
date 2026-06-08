import express from 'express';
import { saveQuizResult, getQuizResults } from '../controllers/quiz.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/results', protect, saveQuizResult);
router.get('/results', protect, getQuizResults);

export default router;