/**
 * Webhook Controller
 * Handles GitHub push webhooks
 */

const Commit = require('../models/Commit');
const Repo = require('../models/Repo');
const activityService = require('../services/activity.service');
const response = require('../utils/response.util');

// Handle GitHub push event
const handlePushEvent = async (req, res) => {
  try {
    const payload = req.body;
    const { repository, commits, pusher } = payload;

    // Find repository
    const repo = await Repo.findOne({ githubRepoId: repository.id });
    if (!repo) {
      return response.error(res, 'Repository not found', 404);
    }

    // Process commits
    const processedCommits = [];
    for (const commit of commits) {
      const processed = await activityService.processCommit(
        repo._id,
        repo.userId,
        commit
      );
      processedCommits.push(processed);
    }

    // Update last sync time
    repo.lastSync = new Date();
    await repo.save();

    response.success(res, { commits: processedCommits }, 'Webhook processed successfully');
  } catch (error) {
    console.error('Webhook error:', error);
    response.error(res, error.message, 500);
  }
};

module.exports = { handlePushEvent };
