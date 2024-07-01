// AuthMiddleware.ts
import { FastifyRequest, FastifyReply } from 'fastify'
import { z } from 'zod'

import { IAuthProvider } from '../../core/domain/auth/IAuthProvider'

export class AuthMiddleware {
  constructor(private authProvider: IAuthProvider) {}

  authenticate(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization']
    if (!token) {
      return res.status(401).json({ message: 'No token provided' })
    }

    try {
      const decoded = this.authProvider.verifyToken(token)
      req.user = decoded
      next()
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' })
    }
  }
}
