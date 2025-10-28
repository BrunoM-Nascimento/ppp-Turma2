const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken, authorizeAdmin } = require('../middleware/auth');

router.post('/admin/register', userController.registerAdmin);
router.post('/users/register', userController.registerUser);
router.get('/users', authenticateToken, authorizeAdmin, userController.getUsers);

module.exports = router;
