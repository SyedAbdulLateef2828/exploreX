import User from '../models/User.js';

export const updateProfile = async (req, res) => {
  try {
    const { name, phone, education, degree, interests, hobbies, goals } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, phone, education, degree, interests, hobbies, goals },
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        education: user.education,
        degree: user.degree,
        interests: user.interests,
        hobbies: user.hobbies,
        goals: user.goals,
        phone: user.phone
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: 'mentor' }).select('-password');
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};