import { Task } from '../../../core/domain/models/Task'
import { ITaskRepository } from '../../../core/domain/repositories/ITaskRepository'

// TaskRepository.ts
export class TaskRepository implements ITaskRepository {
  async findByUserId(userId: string): Promise<Task[]> {
    // implementação para buscar tarefas pelo ID do usuário no banco de dados
  }

  async save(task: Task): Promise<void> {
    // implementação para salvar tarefa no banco de dados
  }
}
