/**
 * GitHub Controller
 * Handles OAuth callback and repository fetching
 */

const User = require('../models/User');
const Repo = require('../models/Repo');
const githubService = require('../services/github.service');
const response = require('../utils/response.util');

// GitHub OAuth callback
const githubCallback = async (req, res) => {
  try {
    const { code } = req.query;
    const userId = req.user?._id;

    if (!code) {
      return response.error(res, 'Authorization code not provided', 400);
    }

    // Exchange code for access token
    const { access_token, user: githubUser } = await githubService.getAccessToken(code);

    // Find or create user
    let user = await User.findOne({ githubId: githubUser.id });
    if (!user) {
      user = new User({
        githubId: githubUser.id,
        username: githubUser.login,
        email: githubUser.email,
        avatar: githubUser.avatar_url,
        accessToken: access_token,
      });
      await user.save();
    } else {
      user.accessToken = access_token;
      await user.save();
    }

    response.success(res, { user, accessToken: access_token }, 'GitHub authentication successful');
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Fetch user repositories
const fetchRepositories = async (req, res) => {
  try {
    const user = req.user;
    const repos = await githubService.fetchUserRepositories(user.accessToken);

    response.success(res, { repositories: repos }, 'Repositories fetched successfully');
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

// Connect repository
const connectRepository = async (req, res) => {
  try {
    const { repoId, repoName } = req.body;
    const userId = req.user._id;

    // Create repository record
    const repo = new Repo({
      userId,
      githubRepoId: repoId,
      name: repoName,
      isConnected: true,
    });

    await repo.save();

    // Setup webhook
    await githubService.setupWebhook(repo.githubRepoId, repo._id);

    response.success(res, { repo }, 'Repository connected successfully', 201);
  } catch (error) {
    response.error(res, error.message, 500);
  }
};

module.exports = { githubCallback, fetchRepositories, connectRepository };
