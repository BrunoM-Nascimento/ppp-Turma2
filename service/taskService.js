const { tasks } = require('../model/database');
const Task = require('./../model/task');

function createTask(title, description, deadline, responsibleId) {
  const id = tasks.length + 1;
  const task = new Task(id, title, description, deadline, responsibleId);
  tasks.push(task);
  return task;
}

function getAllTasks() {
  return tasks;
}

function getTasksByUser(userId) {
  return tasks.filter(t => Number(t.responsibleId) === Number(userId));
}

function updateTaskStatus(taskId, status) {
  const task = tasks.find(t => t.id === taskId);
  if (task) task.status = status;
  return task;
}

function editTask(taskId, data) {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    Object.assign(task, data);
  }
  return task;
}

function deleteTask(taskId) {
  const idx = tasks.findIndex(t => t.id === taskId);
  if (idx !== -1) tasks.splice(idx, 1);
  return idx !== -1;
}

function getProgressReport() {
  const report = { concluido: 0, andamento: 0, pendente: 0 };
  tasks.forEach(t => {
    if (t.status === 'concluído') report.concluido++;
    else if (t.status === 'em andamento') report.andamento++;
    else report.pendente++;
  });
  return report;
}

module.exports = { createTask, getAllTasks, getTasksByUser, updateTaskStatus, editTask, deleteTask, getProgressReport };
