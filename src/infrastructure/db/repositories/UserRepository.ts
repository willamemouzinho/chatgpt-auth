import { User } from '../../../core/domain/models/User'
import { IUserRepository } from '../../../core/domain/repositories/IUserRepository'
import { Email } from '../../../core/domain/value-objects/Email'

// UserRepository.ts
export class UserRepository implements IUserRepository {
  async findById(id: string): Promise<User | null> {
    // implementação para buscar usuário pelo ID no banco de dados
  }

  async findByEmail(email: Email): Promise<User | null> {
    // implementação para buscar usuário pelo email no banco de dados
  }

  async save(user: User): Promise<void> {
    // implementação para salvar usuário no banco de dados
  }
}
