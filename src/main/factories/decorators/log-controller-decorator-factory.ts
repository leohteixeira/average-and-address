import { Logger } from '@/infra/utils'
import { LogControllerDecorator } from '@/main/decorators'
import { Http } from '@/presentation/protocols'

export const makeLogControllerDecorator = (
  controller: Http.Controller
): Http.Controller => {
  const logger = new Logger()
  return new LogControllerDecorator(controller, logger)
}
