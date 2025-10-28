const taskService = require('../service/taskService');

function createTask(req, res) {
  const { title, description, deadline, responsibleId } = req.body;
  const task = taskService.createTask(title, description, deadline, responsibleId);
  res.status(201).json(task);
}

function listTasks(req, res) {
  if (req.user.role === 'admin') {
    res.json(taskService.getAllTasks());
  } else {
    res.json(taskService.getTasksByUser(req.user.id));
  }
}

function updateStatus(req, res) {
  const { status } = req.body;
  const { id } = req.params;
  const task = taskService.updateTaskStatus(Number(id), status);
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
  res.json(task);
}

function editTask(req, res) {
  const { id } = req.params;
  const data = req.body;
  const task = taskService.editTask(Number(id), data);
  if (!task) return res.status(404).json({ error: 'Tarefa não encontrada' });
  res.json(task);
}

function deleteTask(req, res) {
  const { id } = req.params;
  const ok = taskService.deleteTask(Number(id));
  if (!ok) return res.status(404).json({ error: 'Tarefa não encontrada' });
  res.status(204).send();
}

function progressReport(req, res) {
  res.json(taskService.getProgressReport());
}

module.exports = { createTask, listTasks, updateStatus, editTask, deleteTask, progressReport };
