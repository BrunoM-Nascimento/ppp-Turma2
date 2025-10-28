const jwt = require('jsonwebtoken');
const { SECRET } = require('../middleware/auth');
const userService = require('../service/userService');

function login(req, res) {
  const { email, password } = req.body;
  const user = userService.findUserByEmail(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }
  const token = jwt.sign({ id: user.id, role: user.role, name: user.name }, SECRET, { expiresIn: '1h' });
  res.json({ token });
}

module.exports = { login };
