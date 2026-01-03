/**
 * Admin Routes
 * /api/admin/*
 */

const express = require('express');
const adminController = require('../controllers/admin.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

const router = express.Router();

// All admin routes require authentication and ADMIN role
router.use(authMiddleware.verifyToken);
router.use(roleMiddleware.requireAdmin);

router.get('/settings', adminController.getAdminSettings);
router.put('/settings', adminController.updateAdminSettings);
router.get('/users', adminController.getAllUsers);
router.get('/violations', adminController.getActivityViolations);

module.exports = router;
