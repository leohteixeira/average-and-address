import { makeCalculateAverage } from '@/main/factories/usecases'
import { makeCalculateAverageValidation } from '@/main/factories/validations'
import { CalculateAverageController } from '@/presentation/controllers'
import { Http } from '@/presentation/protocols'
import { makeLogControllerDecorator } from '../../decorators'

export const makeCalculateAverageController = (): Http.Controller => {
  const validation = makeCalculateAverageValidation()
  const getAddress = makeCalculateAverage()
  const controller = new CalculateAverageController(validation, getAddress)
  return makeLogControllerDecorator(controller)
}
