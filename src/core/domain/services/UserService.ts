// UserService.ts
import { IUserRepository } from '../repositories/IUserRepository'
import { User } from '../models/User'
import { Email } from '../value-objects/Email'
import { Password } from '../value-objects/Password'
import { IAuthProvider } from '../auth/IAuthProvider'
import { v4 as uuid } from 'uuid'

export class UserService {
  constructor(
    private userRepository: IUserRepository,
    private authProvider: IAuthProvider
  ) {}

  async register(email: Email, password: Password): Promise<string> {
    const user = new User(uuid(), email, password)
    await this.userRepository.save(user)
    return this.authProvider.generateToken(user) // Emite um token após o registro
  }

  async login(email: Email, password: Password): Promise<string> {
    const user = await this.userRepository.findByEmail(email)
    if (!user || !user.password.equals(password)) {
      throw new Error('Invalid credentials')
    }
    return this.authProvider.generateToken(user)
  }

  async logout(token: string): Promise<void> {
    // lógica de logout, como invalidar tokens
    this.authProvider.invalidateToken(token)
  }
}
