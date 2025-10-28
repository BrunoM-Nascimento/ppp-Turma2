const express = require('express');
const fs = require('fs');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

// Rotas principais
app.use(authRoutes);
app.use(userRoutes);
app.use(taskRoutes);

// Swagger
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, 'resources', 'swagger.json')));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req, res) => res.send('API de Gestão de Tarefas'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
