import { GetAddressApi } from '@/data/protocols'
import { mockAddressModel } from '@/tests/domain/mocks'

export class GetAddressApiSpy implements GetAddressApi {
  params: GetAddressApi.Params
  result: GetAddressApi.Result = mockAddressModel()

  async getAddress(cep: GetAddressApi.Params): Promise<GetAddressApi.Result> {
    this.params = cep
    return this.result
  }
}
