// src/entities/TaskEntity.js

class TaskEntity {
  constructor(id, name, description, done) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.done = done;
  }

  static async create(name, description, done) {
    const task = new TaskEntity(null, name, description, done);
    // Lógica para persistir a task no banco de dados
    return task;
  }

  static async getById(id) {
    // Lógica para buscar a task no banco de dados pelo ID
    return new TaskEntity(id, "Nome da Tarefa", "Descrição da Tarefa", false); // Exemplo
  }

  async save() {
    // Lógica para salvar ou atualizar a task no banco de dados
    // Deve ser implementada de acordo com o ORM que você está usando
  }

  async delete() {
    // Lógica para excluir a task do banco de dados
    // Deve ser implementada de acordo com o ORM que você está usando
  }

  // Métodos adicionais, se necessário
}

module.exports = TaskEntity;
