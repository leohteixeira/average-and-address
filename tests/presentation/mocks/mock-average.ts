import { CalculateAverage } from '@/domain/usecases'

export class CalculateAverageSpy implements CalculateAverage {
  params: CalculateAverage.Params
  result: CalculateAverage.Result = 2

  async calculate(
    params: CalculateAverage.Params
  ): Promise<CalculateAverage.Result> {
    this.params = params
    return this.result
  }
}
