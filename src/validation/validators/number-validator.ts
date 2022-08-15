import { Invalidation } from '@/validation/helpers'
import { Validator } from '@/validation/protocols'

export class NumberValidator implements Validator {
  async validate(input: any): Promise<void | string> {
    if (typeof input !== 'number') {
      return Invalidation.type()
    }
  }
}
