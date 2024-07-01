export class Email {
  constructor(private value: string) {
    if (!this.isValidEmail(value)) {
      throw new Error('Invalid email format')
    }
  }

  private isValidEmail(email: string): boolean {
    const re = /\S+@\S+\.\S+/
    return re.test(email)
  }

  toString(): string {
    return this.value
  }
}

/*

// /src/core/domain/value-objects/Email.ts
import { z } from 'zod';

const EmailSchema = z.string().email();

export class Email {
  private readonly _value: string;

  constructor(value: string) {
    this._value = this.validate(value);
  }

  private validate(value: string): string {
    try {
      EmailSchema.parse(value);
      return value;
    } catch (error) {
      throw new Error('Invalid email format');
    }
  }

  get value(): string {
    return this._value;
  }
}

*/
