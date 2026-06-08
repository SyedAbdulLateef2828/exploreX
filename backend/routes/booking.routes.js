import express from 'express';
import { createBooking, getBookings, updateBookingStatus } from '../controllers/booking.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', protect, createBooking);
router.get('/', protect, getBookings);
router.put('/:id/status', protect, updateBookingStatus);

export default router;