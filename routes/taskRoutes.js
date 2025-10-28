const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const { authenticateToken, authorizeAdmin, authorizeUser } = require('../middleware/auth');

router.post('/tasks', authenticateToken, authorizeAdmin, taskController.createTask);
router.get('/tasks', authenticateToken, taskController.listTasks);
router.patch('/tasks/:id/status', authenticateToken, authorizeUser, taskController.updateStatus);
router.put('/tasks/:id', authenticateToken, authorizeAdmin, taskController.editTask);
router.delete('/tasks/:id', authenticateToken, authorizeAdmin, taskController.deleteTask);
router.get('/tasks/report', authenticateToken, authorizeAdmin, taskController.progressReport);

module.exports = router;
