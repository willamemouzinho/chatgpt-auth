import { User } from '../models/User'
import { Email } from '../value-objects/Email'

export interface IUserRepository {
  findById(id: string): Promise<User | null>
  findByEmail(email: Email): Promise<User | null>
  save(user: User): Promise<void>
}
