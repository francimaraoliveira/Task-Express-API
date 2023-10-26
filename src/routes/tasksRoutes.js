// src/routes/taskRoutes.js

const express = require('express');
const TaskEntity = require('../entities/TaskEntity');
const TaskRepository = require('../repositories/TaskRepository');

const router = express.Router();

// Rota para listar todas as tarefas
router.get('/tasks', async (req, res) => {
  // Utilize o método correspondente (Active Record ou Data Mapper)
  // para buscar todas as tarefas
  // Exemplo com Data Mapper
  const tasks = await TaskRepository.getAll();
  res.json(tasks);
});

// Rota para criar uma nova tarefa
router.post('/tasks', async (req, res) => {
  const { name, description, done } = req.body;

  // Utilize o método correspondente (Active Record ou Data Mapper)
  // para criar uma nova tarefa
  // Exemplo com Active Record
  const newTask = await TaskEntity.create(name, description, done);

  // Salvar a tarefa no banco de dados
  await newTask.save();

  res.json(newTask);
});

// Rota para buscar uma tarefa por ID
router.get('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  // Utilize o método correspondente (Active Record ou Data Mapper)
  // para buscar a tarefa por ID
  // Exemplo com Active Record
  const task = await TaskEntity.getById(taskId);

  res.json(task);
});

// Rota para deletar uma tarefa por ID
router.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  // Utilize o método correspondente (Active Record ou Data Mapper)
  // para deletar a tarefa por ID
  // Exemplo com Active Record
  const task = await TaskEntity.getById(taskId);

  await task.delete();

  res.json({ message: 'Tarefa excluída com sucesso!' });
});

module.exports = router;
