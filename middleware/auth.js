// Middleware de autenticação JWT
const jwt = require('jsonwebtoken');
const SECRET = 'supersecret';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido' });
    req.user = user;
    next();
  });
}

function authorizeAdmin(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Acesso restrito a administradores' });
  }
  next();
}

function authorizeUser(req, res, next) {
  if (req.user.role !== 'user') {
    return res.status(403).json({ error: 'Acesso restrito a usuários' });
  }
  next();
}

module.exports = { authenticateToken, authorizeAdmin, authorizeUser, SECRET };
