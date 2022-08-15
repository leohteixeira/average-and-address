import { CalculateAverageUsecase } from '@/data/usecases'

type SutTypes = {
  sut: CalculateAverageUsecase
}

const makeSut = (): SutTypes => {
  const sut = new CalculateAverageUsecase()
  return {
    sut
  }
}

describe('CalculateAverageUsecase Usecase', () => {
  test('Should return an Address.Model on success', async () => {
    const { sut } = makeSut()
    const result = await sut.calculate({ firstValue: 2, secondValue: 2 })
    expect(result).toBe(2)
  })
})
