/**
 * Admin Controller
 * Handles admin dashboard and global rules
 */

const User = require('../models/User');
const AdminSettings = require('../models/AdminSettings');
const Commit = require('../models/Commit');
const response = require('../utils/response.util');

// Get admin settings
const getAdminSettings = async (req, res) => {
  try {
    let settings = await AdminSettings.findOne();

    if (!settings) {
      settings = new AdminSettings();
      await settings.save();
    }

    response.success(res, { settings });
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Update admin settings
const updateAdminSettings = async (req, res) => {
  try {
    const { maxInactivityGapHours, gracePeriodHours, warningThresholdHours } = req.body;

    let settings = await AdminSettings.findOne();
    if (!settings) {
      settings = new AdminSettings();
    }

    if (maxInactivityGapHours) settings.maxInactivityGapHours = maxInactivityGapHours;
    if (gracePeriodHours) settings.gracePeriodHours = gracePeriodHours;
    if (warningThresholdHours) settings.warningThresholdHours = warningThresholdHours;
    settings.updatedBy = req.user._id;

    await settings.save();
    response.success(res, { settings }, 'Settings updated successfully');
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const users = await User.find()
      .select('-accessToken -refreshToken')
      .skip(skip)
      .limit(limit);

    const total = await User.countDocuments();

    response.success(res, { users, pagination: { page, limit, total } });
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Get activity violations
const getActivityViolations = async (req, res) => {
  try {
    const violations = await Commit.find({ status: 'VIOLATION' })
      .populate('userId', 'username email')
      .populate('repoId', 'name fullName')
      .limit(100)
      .sort({ createdAt: -1 });

    response.success(res, { violations });
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

module.exports = {
  getAdminSettings,
  updateAdminSettings,
  getAllUsers,
  getActivityViolations,
};
