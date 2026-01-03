/**
 * Auth Controller
 * Handles user login, signup, and authentication
 */

const User = require('../models/User');
const { generateJWT } = require('../utils/jwt.util');
const response = require('../utils/response.util');

// Signup
const signup = async (req, res) => {
  try {
    const { githubId, username, email, avatar, accessToken } = req.body;

    // Check if user exists
    let user = await User.findOne({ githubId });
    if (user) {
      return response.success(res, { user, token: generateJWT(user._id) }, 'User already exists');
    }

    // Create new user
    user = new User({
      githubId,
      username,
      email,
      avatar,
      accessToken,
      role: 'USER',
    });

    await user.save();

    const token = generateJWT(user._id);
    response.success(res, { user, token }, 'User created successfully', 201);
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Login
const login = async (req, res) => {
  try {
    const { githubId } = req.body;

    const user = await User.findOne({ githubId });
    if (!user) {
      return response.error(res, 'User not found', 404);
    }

    const token = generateJWT(user._id);
    response.success(res, { user, token }, 'Login successful');
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Logout
const logout = (req, res) => {
  try {
    // Client-side token removal, server can invalidate if needed
    response.success(res, {}, 'Logout successful');
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

module.exports = { signup, login, logout };
