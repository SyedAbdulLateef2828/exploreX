import express from 'express';
import { updateProfile, getAllUsers } from '../controllers/user.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.put('/profile', protect, updateProfile);
router.get('/mentors', protect, getAllUsers);

export default router;