// Password.ts
export class Password {
  constructor(private value: string) {
    if (value.length < 6) {
      throw new Error('Password must be at least 6 characters long')
    }
  }

  equals(other: Password): boolean {
    return this.value === other.value
  }
}

/*

import { z } from 'zod';

const PasswordSchema = z.string().min(6);

export class Password {
  private readonly _value: string;

  constructor(value: string) {
    this._value = this.validate(value);
  }

  private validate(value: string): string {
    try {
      PasswordSchema.parse(value);
      return value;
    } catch (error) {
      throw new Error('Password must be at least 6 characters long');
    }
  }

  get value(): string {
    return this._value;
  }
}


*/
