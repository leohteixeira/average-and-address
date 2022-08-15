import { GetAddressController } from '@/presentation/controllers'
import {
  CompositeValidation,
  ObjectKeyValidation,
  RequiredValidation
} from '@/validation/validations'
import {
  CepValidator,
  RequiredValidator,
  TypeValidator
} from '@/validation/validators'

export const makeGetAddressValidation =
  (): CompositeValidation<GetAddressController.Request> => {
    const requiredValidator = new RequiredValidator()
    const stringValidator = new TypeValidator('string')
    const cepValidator = new CepValidator()

    return new CompositeValidation([
      new RequiredValidation(requiredValidator, ['cep']),
      new ObjectKeyValidation(stringValidator, 'cep'),
      new ObjectKeyValidation(cepValidator, 'cep')
    ])
  }
