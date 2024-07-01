// IAuthProvider.ts
import { User } from '../models/User'

export interface IAuthProvider {
  generateToken(user: User): string
  invalidateToken(token: string): void
  verifyToken(token: string): User | null
}
