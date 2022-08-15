/* eslint-disable @typescript-eslint/no-unused-vars */
import { AxiosError } from '@/data/errors/axios-error'
import { GetViaCepAddressApi } from '@/infra/apis'
import { HttpGetClient } from '@/infra/http'
import { mockAddressModel } from '@/tests/domain/mocks'

import { mock, MockProxy } from 'jest-mock-extended'

describe('GetViaCepAddressApi', () => {
  let sut: GetViaCepAddressApi
  let httpClient: MockProxy<HttpGetClient>

  let baseUrl: string
  let apiKey: string

  const result = mockAddressModel()
  const cep = result.cep

  beforeAll(() => {
    baseUrl = 'my-api-url'
    apiKey = 'my-api-key'
    httpClient = mock()
  })

  beforeEach(() => {
    httpClient.get.mockResolvedValueOnce(result)
    sut = new GetViaCepAddressApi(baseUrl, httpClient)
  })

  it('Should call HttpGetClient with correct values', async () => {
    await sut.getAddress(cep)
    expect(httpClient.get).toHaveBeenCalledWith({
      url: `${baseUrl}/${cep}/json`
    })
  })

  it('Should throw AxiosError.Error if HttpGetClient does not have success', async () => {
    httpClient.get
      .mockReset()
      .mockRejectedValueOnce(new AxiosError.BadRequest())
    const promise = sut.getAddress('invalid_cep')
    await expect(promise).rejects.toThrowError(AxiosError.Error)
  })

  it('Should return an address model on success', async () => {
    httpClient.get.mockResolvedValueOnce(result)
    const address = await sut.getAddress(cep)
    expect(address).toEqual(result)
  })
})
