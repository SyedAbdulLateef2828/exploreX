import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const protect = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization?.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({ success: false, message: 'Not authorized, no token' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ FIX 3: Only select fields needed for middleware, exclude password
    const user = await User.findById(decoded.id).select('-password');

    // ✅ FIX 4: Guard against deleted users
    if (!user) {
      return res.status(401).json({ success: false, message: 'User no longer exists' });
    }

    req.user = user;
    next();
  } catch (error) {
    // ✅ FIX 1: Single catch — jwt.verify throws on invalid/expired token
    return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
  }
};