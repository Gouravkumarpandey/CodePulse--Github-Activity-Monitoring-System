/**
 * Repository model
 * Stores connected repository information
 */

const mongoose = require('mongoose');

const repoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    githubRepoId: {
      type: Number,
      required: true,
    },
    name: String,
    fullName: String,
    owner: String,
    url: String,
    description: String,
    language: String,
    isPrivate: Boolean,
    isConnected: {
      type: Boolean,
      default: true,
    },
    webhookId: String,
    lastSync: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Repo', repoSchema);
