// AuthController.ts
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

import { UserService } from '../../core/domain/services/UserService'
import { Email } from '../../core/domain/value-objects/Email'
import { Password } from '../../core/domain/value-objects/Password'

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export class AuthController {
  constructor(private userService: UserService) {}

  async register(req: Request, res: Response) {
    const { email, password } = userSchema.parse(req.body)
    try {
      const token = await this.userService.register(
        new Email(email),
        new Password(password)
      )
      res.status(201).json({ token })
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body
    try {
      const token = await this.userService.login(
        new Email(email),
        new Password(password)
      )
      res.json({ token })
    } catch (error) {
      res.status(401).json({ message: error.message })
    }
  }

  async logout(req: Request, res: Response) {
    const token = req.headers['authorization']
    if (!token) {
      return res.status(401).json({ message: 'No token provided' })
    }
    try {
      await this.userService.logout(token)
      res.status(200).send()
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}
