// TaskController.ts
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

export class TaskController {
  constructor(private taskService: TaskService) {}

  async createTask(req: Request, res: Response) {
    const { title, description } = req.body
    const userId = req.user.id // assumindo que o middleware de autenticação adiciona o user ao req
    try {
      await this.taskService.createTask(userId, title, description)
      res.status(201).send()
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}
