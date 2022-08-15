import { Logger } from '@/infra/utils'
import { Http } from '@/presentation/protocols'

export class LogControllerDecorator implements Http.Controller {
  constructor(
    private readonly controller: Http.Controller,
    private readonly logger: Logger
  ) {}

  async handle(request: any): Promise<Http.Response> {
    const httpResponse = await this.controller.handle(request)
    this.logger.info({ ...request, result: httpResponse.body })
    if (httpResponse.statusCode === 500) {
      this.logger.error({
        stack: httpResponse.body.message
      })
    }
    return httpResponse
  }
}
