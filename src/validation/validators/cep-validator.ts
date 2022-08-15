/* eslint-disable @typescript-eslint/no-var-requires */
import { Invalidation } from '@/validation/helpers'
import { Validator } from '@/validation/protocols'

const cep = require('cep-promise')

export class CepValidator implements Validator {
  async validate(code: string): Promise<void | string> {
    try {
      await cep(code, { timeout: 3000 })
    } catch (error) {
      return Invalidation.pattern()
    }
  }
}
