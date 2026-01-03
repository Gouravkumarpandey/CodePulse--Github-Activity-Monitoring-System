/**
 * Auth Routes
 * /api/auth/*
 */

const express = require('express');
const authController = require('../controllers/auth.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authMiddleware.verifyToken, authController.logout);

module.exports = router;
