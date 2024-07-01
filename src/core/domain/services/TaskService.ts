import { ITaskRepository } from '../repositories/ITaskRepository'

export class TaskService {
  constructor(private taskRepository: ITaskRepository) {}

  async createTask(
    userId: string,
    title: string,
    description: string
  ): Promise<void> {
    const task = new Task(uuid(), title, description, userId)
    await this.taskRepository.save(task)
  }
}
