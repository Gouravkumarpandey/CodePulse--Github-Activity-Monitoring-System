/**
 * User Routes
 * /api/user/*
 */

const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/profile', authMiddleware.verifyToken, userController.getUserProfile);
router.get('/repositories', authMiddleware.verifyToken, userController.getUserRepositories);
router.get('/activity/:repoId', authMiddleware.verifyToken, userController.getRepositoryActivity);
router.get('/dashboard', authMiddleware.verifyToken, userController.getDashboardSummary);

module.exports = router;
