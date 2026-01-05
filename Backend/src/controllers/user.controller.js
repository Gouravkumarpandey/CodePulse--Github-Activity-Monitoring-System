/**
 * User Controller  
 * Enhanced with repository overview and activity tracking
 */

const User = require('../models/User');
const Repo = require('../models/Repo');
const Commit = require('../models/Commit');
const AdminSettings = require('../models/AdminSettings');
const response = require('../utils/response.util');
const timeUtil = require('../utils/time.util');

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password -accessToken -refreshToken');

    if (!user) {
      return response.error(res, 'User not found', 404);
    }

    response.success(res, { user });
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Get active repository with overview
const getActiveRepository = async (req, res) => {
  try {
    const activeRepo = await Repo.findOne({ 
      userId: req.user._id, 
      isActive: true 
    });

    if (!activeRepo) {
      return response.success(res, { repository: null }, 'No active repository');
    }

    // Get last commit
    const lastCommit = await Commit.findOne({ repoId: activeRepo._id })
      .sort({ commitDate: -1 });

    // Get admin settings
    const settings = await AdminSettings.findOne();
    const maxGap = settings?.maxInactivityGapHours || 24;

    // Calculate current gap
    const currentGap = lastCommit 
      ? timeUtil.getGapInHours(lastCommit.commitDate, new Date())
      : null;

    // Determine status
    let status = 'COMPLIANT';
    if (currentGap) {
      if (currentGap > maxGap + (settings?.gracePeriodHours || 0)) {
        status = 'VIOLATION';
      } else if (currentGap > (settings?.warningThresholdHours || 20)) {
        status = 'WARNING';
      }
    }

    const overview = {
      repository: {
        name: activeRepo.name,
        fullName: activeRepo.fullName,
        url: activeRepo.url,
        description: activeRepo.description,
        language: activeRepo.language,
      },
      lastCommit: lastCommit ? {
        message: lastCommit.message,
        date: lastCommit.commitDate,
        author: lastCommit.author,
        sha: lastCommit.commitSha,
      } : null,
      currentInactivityGap: currentGap,
      allowedGap: maxGap,
      status,
      rules: {
        maxInactivityGap: maxGap,
        gracePeriod: settings?.gracePeriodHours || 0,
        warningThreshold: settings?.warningThresholdHours || 20,
      },
    };

    response.success(res, { overview });
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

// Set active repository (only one can be active)
const setActiveRepository = async (req, res) => {
  try {
    const { repoId } = req.body;

    const repo = await Repo.findOne({ _id: repoId, userId: req.user._id });
    if (!repo) {
      return response.error(res, 'Repository not found', 404);
    }

    // Deactivate all other repos
    await Repo.updateMany(
      { userId: req.user._id },
      { isActive: false }
    );

    // Activate selected repo
    repo.isActive = true;
    await repo.save();

    response.success(res, { repository: repo }, 'Active repository updated');
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Get repository activity (commit timeline)
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

// Get warnings and violations
const getWarningsAndViolations = async (req, res) => {
  try {
    const userId = req.user._id;

    // Get all user's repositories
    const repos = await Repo.find({ userId });
    const repoIds = repos.map(r => r._id);

    // Get warnings and violations
    const warnings = await Commit.find({
      repoId: { $in: repoIds },
      status: 'WARNING',
    }).populate('repoId', 'name fullName').sort({ commitDate: -1 }).limit(50);

    const violations = await Commit.find({
      repoId: { $in: repoIds },
      status: 'VIOLATION',
    }).populate('repoId', 'name fullName').sort({ commitDate: -1 }).limit(50);

    response.success(res, { warnings, violations });
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Get dashboard summary
const getDashboardSummary = async (req, res) => {
  try {
    const userId = req.user._id;

    const repos = await Repo.find({ userId });
    const activeRepo = repos.find(r => r.isActive);

    const repoIds = repos.map(r => r._id);

    const totalCommits = await Commit.countDocuments({ repoId: { $in: repoIds } });
    const violations = await Commit.countDocuments({ repoId: { $in: repoIds }, status: 'VIOLATION' });
    const warnings = await Commit.countDocuments({ repoId: { $in: repoIds }, status: 'WARNING' });

    // Get current status
    const user = await User.findById(userId);

    response.success(res, {
      summary: {
        totalRepositories: repos.length,
        activeRepository: activeRepo ? activeRepo.name : null,
        totalCommits,
        violations,
        warnings,
        userStatus: user.status,
        warningCount: user.warningCount,
        violationCount: user.violationCount,
        isUnderObservation: user.isUnderObservation,
      },
    });
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Get admin rules (read-only for users)
const getAdminRules = async (req, res) => {
  try {
    const settings = await AdminSettings.findOne();

    if (!settings) {
      return response.success(res, { 
        rules: {
          maxInactivityGapHours: 24,
          gracePeriodHours: 12,
          warningThresholdHours: 20,
        }
      });
    }

    response.success(res, {
      rules: {
        maxInactivityGapHours: settings.maxInactivityGapHours,
        gracePeriodHours: settings.gracePeriodHours,
        warningThresholdHours: settings.warningThresholdHours,
        totalAllowedGap: settings.maxInactivityGapHours + settings.gracePeriodHours,
      },
    });
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

module.exports = {
  getUserProfile,
  getActiveRepository,
  getUserRepositories,
  setActiveRepository,
  getRepositoryActivity,
  getWarningsAndViolations,
  getDashboardSummary,
  getAdminRules,
};
