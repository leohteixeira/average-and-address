import { CalculateAverageController } from '@/presentation/controllers'
import {
  CompositeValidation,
  ObjectKeyValidation,
  RequiredValidation
} from '@/validation/validations'
import { NumberValidator, RequiredValidator } from '@/validation/validators'

export const makeCalculateAverageValidation =
  (): CompositeValidation<CalculateAverageController.Request> => {
    const requiredValidator = new RequiredValidator()
    const numberValidator = new NumberValidator()

    return new CompositeValidation([
      new RequiredValidation(requiredValidator, ['firstValue', 'secondValue']),
      new ObjectKeyValidation(numberValidator, 'firstValue'),
      new ObjectKeyValidation(numberValidator, 'secondValue')
    ])
  }
