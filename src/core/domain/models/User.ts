import { Email } from '../value-objects/Email'
import { Password } from '../value-objects/Password'

// User.ts
export class User {
  constructor(
    public id: string,
    public email: Email,
    public password: Password // outros campos
  ) {}
}
