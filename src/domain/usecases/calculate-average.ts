export interface CalculateAverage {
  calculate: (
    params: CalculateAverage.Params
  ) => Promise<CalculateAverage.Result>
}

export namespace CalculateAverage {
  export type Params = {
    firstValue: number
    secondValue: number
  }
  export type Result = number
}
