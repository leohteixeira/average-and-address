import { HttpError } from '@/presentation/errors'
import { CalculateAverageController } from '@/presentation/controllers'
import { CalculateAverageSpy } from '@/tests/presentation/mocks'
import { throwError } from '@/tests/utils'
import { ValidationSpy } from '@/tests/validation/mocks'

type SutTypes = {
  sut: CalculateAverageController
  validationSpy: ValidationSpy
  calculateAverageSpy: CalculateAverageSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const calculateAverageSpy = new CalculateAverageSpy()
  const sut = new CalculateAverageController(validationSpy, calculateAverageSpy)

  return {
    sut,
    validationSpy,
    calculateAverageSpy
  }
}

describe('CalculateAverage Controller', () => {
  test('Should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()
    const request = { firstValue: 2, secondValue: 2 }
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })

  test('Should return BadRequest if validation return invalid params', async () => {
    const { sut, validationSpy } = makeSut()
    jest.spyOn(validationSpy, 'validate').mockResolvedValueOnce({
      param: 'error'
    })
    const result = await sut.handle({ firstValue: 2, secondValue: 2 })
    expect(result).toBeInstanceOf(HttpError.BadRequest)
  })

  test('Should return ServerError if validation throws', async () => {
    const { sut, validationSpy } = makeSut()
    jest.spyOn(validationSpy, 'validate').mockImplementationOnce(throwError)
    const result = await sut.handle({ firstValue: 2, secondValue: 2 })
    expect(result).toBeInstanceOf(HttpError.Server)
  })

  test('Should call CalculateAverage with correct values', async () => {
    const { sut, calculateAverageSpy } = makeSut()
    const request = { firstValue: 2, secondValue: 2 }
    await sut.handle(request)
    expect(calculateAverageSpy.params).toEqual(request)
  })

  test('Should return ServerError if CalculateAverage throws', async () => {
    const { sut, calculateAverageSpy } = makeSut()
    jest
      .spyOn(calculateAverageSpy, 'calculate')
      .mockImplementationOnce(throwError)
    const result = await sut.handle({ firstValue: 2, secondValue: 2 })
    expect(result).toBeInstanceOf(HttpError.Server)
  })

  test('Should return ok if request is succeeded', async () => {
    const { sut, calculateAverageSpy } = makeSut()
    const result = await sut.handle({ firstValue: 2, secondValue: 2 })
    expect(result.body).toEqual(calculateAverageSpy.result)
    expect(result.statusCode).toEqual(200)
  })
})
