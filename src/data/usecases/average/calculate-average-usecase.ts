import { CalculateAverage } from '@/domain/usecases'

export class CalculateAverageUsecase implements CalculateAverage {
  async calculate(
    params: CalculateAverage.Params
  ): Promise<CalculateAverage.Result> {
    const { firstValue, secondValue } = params

    return (
      Math.round(((firstValue + secondValue) / 2 + Number.EPSILON) * 100) / 100
    )
  }
}
