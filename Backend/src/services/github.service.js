/**
 * GitHub Service
 * Helper functions for GitHub API interactions
 */

const axios = require('axios');
const GITHUB_CONFIG = require('../config/github');

class GitHubService {
  /**
   * Exchange authorization code for access token
   */
  static async getAccessToken(code) {
    try {
      const response = await axios.post(
        'https://github.com/login/oauth/access_token',
        {
          client_id: GITHUB_CONFIG.clientID,
          client_secret: GITHUB_CONFIG.clientSecret,
          code,
        },
        {
          headers: { Accept: 'application/json' },
        }
      );

      const { access_token } = response.data;

      // Get user info
      const userResponse = await axios.get('https://api.github.com/user', {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      return {
        access_token,
        user: userResponse.data,
      };
    } catch (error) {
      throw new Error('Failed to get access token: ' + error.message);
    }
  }

  /**
   * Fetch user repositories
   */
  static async fetchUserRepositories(accessToken) {
    try {
      const response = await axios.get('https://api.github.com/user/repos', {
        headers: { Authorization: `Bearer ${accessToken}` },
        params: { per_page: 100 },
      });

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch repositories: ' + error.message);
    }
  }

  /**
   * Setup webhook for a repository
   */
  static async setupWebhook(repoId, webhookId) {
    try {
      // Implementation depends on your GitHub App setup
      console.log(`Setting up webhook for repo ${repoId}`);
      return { webhookId };
    } catch (error) {
      throw new Error('Failed to setup webhook: ' + error.message);
    }
  }

  /**
   * Get repository commits
   */
  static async getRepositoryCommits(owner, repo, accessToken) {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/commits`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          params: { per_page: 100 },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch commits: ' + error.message);
    }
  }
}

module.exports = GitHubService;
