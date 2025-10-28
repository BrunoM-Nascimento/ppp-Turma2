// Modelo de tarefa
class Task {
  constructor(id, title, description, deadline, responsibleId, status = 'não realizado') {
    this.id = id;
    this.title = title;
    this.description = description;
    this.deadline = deadline;
    this.responsibleId = responsibleId;
    this.status = status; // 'não realizado', 'em andamento', 'concluído'
  }
}

module.exports = Task;
