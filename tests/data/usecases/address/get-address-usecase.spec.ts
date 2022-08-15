import { GetAddressUsecase } from '@/data/usecases'
import { GetAddressApiSpy } from '@/tests/data/mocks'
import { throwError } from '@/tests/utils'

type SutTypes = {
  sut: GetAddressUsecase
  getAddressApiSpy: GetAddressApiSpy
}

const makeSut = (): SutTypes => {
  const getAddressApiSpy = new GetAddressApiSpy()
  const sut = new GetAddressUsecase(getAddressApiSpy)
  return {
    sut,
    getAddressApiSpy
  }
}

describe('GetAddressUsecase Usecase', () => {
  test('Should call GetAddressApi with the right params', async () => {
    const { sut, getAddressApiSpy } = makeSut()
    const params = { cep: 'any_cep' }
    await sut.get(params)
    expect(getAddressApiSpy.params).toEqual(params.cep)
  })

  test('Should throw if GetAddressApi throws', async () => {
    const { sut, getAddressApiSpy } = makeSut()
    jest
      .spyOn(getAddressApiSpy, 'getAddress')
      .mockImplementationOnce(throwError)
    const promise = sut.get({ cep: 'any_cep' })
    await expect(promise).rejects.toThrow()
  })

  test('Should return an Address.Model on success', async () => {
    const { sut, getAddressApiSpy } = makeSut()
    const result = await sut.get({ cep: 'any_cep' })
    expect(result).toEqual(getAddressApiSpy.result)
  })
})
