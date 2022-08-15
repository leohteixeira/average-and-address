import { GetAddress } from '@/domain/usecases'
import { mockAddressModel } from '@/tests/domain/mocks'

export class GetAddressSpy implements GetAddress {
  params: GetAddress.Params
  result: GetAddress.Result = mockAddressModel()

  async get(params: GetAddress.Params): Promise<GetAddress.Result> {
    this.params = params
    return this.result
  }
}
