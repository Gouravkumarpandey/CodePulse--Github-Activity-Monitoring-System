/**
 * User Controller
 * Handles user dashboard APIs
 */

const User = require('../models/User');
const Repo = require('../models/Repo');
const Commit = require('../models/Commit');
const response = require('../utils/response.util');

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-accessToken -refreshToken');

    if (!user) {
      return response.error(res, 'User not found', 404);
    }

    response.success(res, { user });
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Get user repositories
const getUserRepositories = async (req, res) => {
  try {
    const repos = await Repo.find({ userId: req.user._id });
    response.success(res, { repositories: repos });
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Get repository activity
const getRepositoryActivity = async (req, res) => {
  try {
    const { repoId } = req.params;
    const limit = parseInt(req.query.limit) || 50;

    const commits = await Commit.find({ repoId })
      .limit(limit)
      .sort({ commitDate: -1 });

    response.success(res, { commits });
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Get dashboard summary
const getDashboardSummary = async (req, res) => {
  try {
    const userId = req.user._id;

    const repos = await Repo.find({ userId });
    const totalCommits = await Commit.countDocuments({ userId });
    const violations = await Commit.countDocuments({ userId, status: 'VIOLATION' });
    const warnings = await Commit.countDocuments({ userId, status: 'WARNING' });

    response.success(res, {
      summary: {
        totalRepositories: repos.length,
        totalCommits,
        violations,
        warnings,
      },
    });
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

module.exports = {
  getUserProfile,
  getUserRepositories,
  getRepositoryActivity,
  getDashboardSummary,
};
