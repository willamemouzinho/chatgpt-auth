import { Task } from '../models/Task'

// ITaskRepository.ts
export interface ITaskRepository {
  findByUserId(userId: string): Promise<Task[]>
  save(task: Task): Promise<void>
  // outros métodos
}
