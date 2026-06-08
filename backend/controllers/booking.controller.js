import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  try {
    const { mentor, date, timeSlot, price, notes } = req.body;

    const booking = await Booking.create({
      student: req.user.id,
      mentor,
      date,
      timeSlot,
      price,
      notes
    });

    res.status(201).json({
      success: true,
      booking
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ 
      $or: [{ student: req.user.id }, { mentor: req.user.id }]
    })
    .populate('student', 'name email')
    .populate('mentor', 'name email')
    .sort({ createdAt: -1 });

    res.json({
      success: true,
      bookings
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({
      success: true,
      booking
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};