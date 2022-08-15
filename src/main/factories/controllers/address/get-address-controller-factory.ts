import { makeGetAddress } from '@/main/factories/usecases'
import { makeGetAddressValidation } from '@/main/factories/validations'
import { GetAddressController } from '@/presentation/controllers'
import { Http } from '@/presentation/protocols'

export const makeGetAddressController = (): Http.Controller => {
  const validation = makeGetAddressValidation()
  const getAddress = makeGetAddress()
  return new GetAddressController(validation, getAddress)
}
