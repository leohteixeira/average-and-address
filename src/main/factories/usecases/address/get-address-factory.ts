import { GetAddressUsecase } from '@/data/usecases'
import { GetAddress } from '@/domain/usecases'
import { makeGetViaCepAddressApi } from '@/main/factories/apis'

export const makeGetAddress = (): GetAddress => {
  const getViaCepAddressApi = makeGetViaCepAddressApi()
  return new GetAddressUsecase(getViaCepAddressApi)
}
