import { CalculateAverageUsecase } from '@/data/usecases'
import { CalculateAverage } from '@/domain/usecases'

export const makeCalculateAverage = (): CalculateAverage => {
  return new CalculateAverageUsecase()
}
