import { HttpError } from '@/presentation/errors'
import { GetAddressController } from '@/presentation/controllers'
import { GetAddressSpy } from '@/tests/presentation/mocks'
import { throwError } from '@/tests/utils'
import { ValidationSpy } from '@/tests/validation/mocks'

type SutTypes = {
  sut: GetAddressController
  validationSpy: ValidationSpy
  getAddressSpy: GetAddressSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const getAddressSpy = new GetAddressSpy()
  const sut = new GetAddressController(validationSpy, getAddressSpy)

  return {
    sut,
    validationSpy,
    getAddressSpy
  }
}

describe('GetAddress Controller', () => {
  test('Should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()
    const request = { cep: 'any_cep' }
    await sut.handle(request)
    expect(validationSpy.input).toEqual(request)
  })

  test('Should return BadRequest if validation return invalid params', async () => {
    const { sut, validationSpy } = makeSut()
    jest.spyOn(validationSpy, 'validate').mockResolvedValueOnce({
      param: 'error'
    })
    const result = await sut.handle({ cep: 'any_cep' })
    expect(result).toBeInstanceOf(HttpError.BadRequest)
  })

  test('Should return ServerError if validation throws', async () => {
    const { sut, validationSpy } = makeSut()
    jest.spyOn(validationSpy, 'validate').mockImplementationOnce(throwError)
    const result = await sut.handle({ cep: 'any_cep' })
    expect(result).toBeInstanceOf(HttpError.Server)
  })

  test('Should call GetAddress with correct values', async () => {
    const { sut, getAddressSpy } = makeSut()
    const request = { cep: 'any_cep' }
    await sut.handle(request)
    expect(getAddressSpy.params).toEqual(request)
  })

  test('Should return ServerError if GetAddress throws', async () => {
    const { sut, getAddressSpy } = makeSut()
    jest.spyOn(getAddressSpy, 'get').mockImplementationOnce(throwError)
    const result = await sut.handle({ cep: 'any_cep' })
    expect(result).toBeInstanceOf(HttpError.Server)
  })

  test('Should return ok if request is succeeded', async () => {
    const { sut, getAddressSpy } = makeSut()
    const result = await sut.handle({ cep: 'any_cep' })
    expect(result.body).toEqual(getAddressSpy.result)
    expect(result.statusCode).toEqual(200)
  })
})
