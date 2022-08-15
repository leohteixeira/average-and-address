import { GetAddressApi } from '@/data/protocols'
import { GetAddress } from '@/domain/usecases'

export class GetAddressUsecase implements GetAddress {
  constructor(private readonly getAddressApi: GetAddressApi) {}

  async get(params: GetAddress.Params): Promise<GetAddress.Result> {
    return await this.getAddressApi.getAddress(params.cep)
  }
}
