import { GetAddress } from '@/domain/usecases'
import { HttpError } from '@/presentation/errors'
import { ok } from '@/presentation/helpers'
import { Http } from '@/presentation/protocols'
import { Validation } from '@/validation/protocols'

export class GetAddressController implements Http.Controller {
  constructor(
    private readonly validation: Validation<GetAddressController.Request>,
    private readonly getAddress: GetAddress
  ) {}

  async handle(
    request: GetAddressController.Request
  ): Promise<Http.Response<GetAddressController.Response>> {
    try {
      const badParams = await this.validation.validate(request)
      if (badParams) return new HttpError.BadRequest(badParams)

      const result = await this.getAddress.get(request)

      return ok(result)
    } catch (error) {
      return new HttpError.Server(String(error.stack))
    }
  }
}

export namespace GetAddressController {
  export type Request = GetAddress.Params
  export type Response = GetAddress.Result
}
