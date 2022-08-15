import { GetAddressApi } from '@/data/protocols'
import { GetAddress } from '@/domain/usecases'

export class GetAddressUsecase implements GetAddress {
  constructor(private readonly getAddressApi: GetAddressApi) {}

  async get(params: GetAddress.Params): Promise<GetAddress.Result> {
    const result = await this.getAddressApi.getAddress(params.cep)
    return result
  }
}
