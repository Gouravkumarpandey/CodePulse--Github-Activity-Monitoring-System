/**
 * Activity Service
 * Handles commit processing and storage
 */

const Commit = require('../models/Commit');
const Repo = require('../models/Repo');
const ruleEngine = require('./ruleEngine.service');

class ActivityService {
  /**
   * Process a commit from GitHub webhook
   */
  static async processCommit(repoId, userId, commitData) {
    try {
      // Check if commit already exists
      const existingCommit = await Commit.findOne({ commitSha: commitData.id });
      if (existingCommit) {
        return existingCommit;
      }

      // Get previous commit for gap calculation
      const previousCommit = await Commit.findOne({ repoId })
        .sort({ commitDate: -1 })
        .limit(1);

      // Validate against rules
      const validation = await ruleEngine.validateCommit({
        commitDate: new Date(commitData.timestamp),
        previousCommitDate: previousCommit?.commitDate,
      });

      // Create commit record
      const commit = new Commit({
        repoId,
        userId,
        commitSha: commitData.id,
        message: commitData.message,
        author: commitData.author?.name,
        committer: commitData.committer?.name,
        commitDate: new Date(commitData.timestamp),
        filesChanged: commitData.added?.length + commitData.modified?.length + commitData.removed?.length,
        additions: commitData.added?.length || 0,
        deletions: commitData.removed?.length || 0,
        branch: commitData.branch || 'main',
        status: validation.status || 'OK',
        inactivityGap: validation.gap,
        isViolation: validation.isValid === false,
      });

      await commit.save();

      return commit;
    } catch (error) {
      console.error('Error processing commit:', error);
      throw error;
    }
  }

  /**
   * Get activity summary for a repository
   */
  static async getRepositoryActivitySummary(repoId) {
    try {
      const commits = await Commit.find({ repoId }).sort({ commitDate: -1 }).limit(100);

      const summary = {
        totalCommits: commits.length,
        violations: commits.filter((c) => c.status === 'VIOLATION').length,
        warnings: commits.filter((c) => c.status === 'WARNING').length,
        lastCommit: commits[0],
        averageGap: this.calculateAverageGap(commits),
      };

      return summary;
    } catch (error) {
      throw new Error('Failed to get activity summary: ' + error.message);
    }
  }

  /**
   * Calculate average inactivity gap
   */
  static calculateAverageGap(commits) {
    if (commits.length < 2) return 0;

    const gaps = commits
      .slice(0, -1)
      .map((c, i) => c.inactivityGap || 0)
      .filter((g) => g > 0);

    return gaps.length > 0 ? gaps.reduce((a, b) => a + b, 0) / gaps.length : 0;
  }
}

module.exports = ActivityService;
