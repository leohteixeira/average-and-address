import { CalculateAverage } from '@/domain/usecases'
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { Http } from '@/presentation/protocols'
import { Validation } from '@/validation/protocols'

export class CalculateAverageController implements Http.Controller {
  constructor(
    private readonly validation: Validation<CalculateAverageController.Request>,
    private readonly calculateAverage: CalculateAverage
  ) {}

  async handle(
    request: CalculateAverageController.Request
  ): Promise<Http.Response<CalculateAverageController.Response>> {
    try {
      const badParams = await this.validation.validate(request)
      if (badParams) return new HttpError.BadRequest(badParams)

      const result = await this.calculateAverage.calculate(request)

      return ok(result)
    } catch (error) {
      return new HttpError.Server(String(error.stack))
    }
  }
}

export namespace CalculateAverageController {
  export type Request = CalculateAverage.Params
  export type Response = CalculateAverage.Result
}
