// JwtAuthProvider.ts
import jwt from 'jsonwebtoken'

import { User } from '../../core/domain/models/User'

export class JwtAuthProvider implements IAuthProvider {
  generateToken(user: User): string {
    return jwt.sign({ id: user.id }, 'your_jwt_secret')
  }

  verifyToken(token: string): string {
    return jwt.verify(token, 'your_jwt_secret')
  }
}
