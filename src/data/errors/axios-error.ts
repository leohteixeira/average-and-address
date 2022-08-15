import { IdentifiedError } from '@/domain/errors'

export namespace AxiosError {
  abstract class AxiosError extends IdentifiedError {
    constructor(name: string, message: string) {
      super('AxiosError', name, message)
    }
  }

  export class NotFound extends AxiosError {
    constructor(message = 'Data not found') {
      super('NotFound', message)
    }
  }

  export class BadRequest extends AxiosError {
    constructor(message = 'Bad request') {
      super('BadRequest', message)
    }
  }

  export class Error extends AxiosError {
    constructor(message = 'Error') {
      super('Error', message)
    }
  }
}
