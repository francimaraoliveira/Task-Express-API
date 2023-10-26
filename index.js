// index.js

const express = require('express');
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();

app.use(express.json());
app.use('/api', taskRoutes); // Adicione o prefixo '/api' para as rotas das tarefas

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
