const userService = require('../service/userService');

function registerAdmin(req, res) {
  const { name, email, password } = req.body;
  if (userService.findUserByEmail(email)) {
    return res.status(400).json({ error: 'Email já cadastrado' });
  }
  const user = userService.createUser(name, email, password, 'admin');
  res.status(201).json(user);
}

function registerUser(req, res) {
  const { name, email, password } = req.body;
  if (userService.findUserByEmail(email)) {
    return res.status(400).json({ error: 'Email já cadastrado' });
  }
  const user = userService.createUser(name, email, password, 'user');
  res.status(201).json(user);
}

function getUsers(req, res) {
  const taskService = require('../service/taskService');
  const users = userService.getAllUsers().map(user => {
    const userTasks = taskService.getTasksByUser(user.id);
    return { ...user, tasks: userTasks };
  });
  res.json(users);
}

module.exports = { registerAdmin, registerUser, getUsers };
