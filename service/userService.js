const { users } = require('../model/database');
const User = require('../model/user');

function createUser(name, email, password, role) {
  const id = users.length + 1;
  const user = new User(id, name, email, password, role);
  users.push(user);
  return user;
}

function findUserByEmail(email) {
  return users.find(u => u.email === email);
}

function findUserById(id) {
  return users.find(u => u.id === id);
}

function getAllUsers() {
  return users;
}

module.exports = { createUser, findUserByEmail, findUserById, getAllUsers };
