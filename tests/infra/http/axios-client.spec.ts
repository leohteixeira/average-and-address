import { AxiosHttpClient } from '@/infra/http'

import axios from 'axios'

jest.mock('axios')

describe('AxiosHttpClient', () => {
  let sut: AxiosHttpClient
  let fakeAxios: jest.Mocked<typeof axios>
  let url: string

  beforeAll(() => {
    url = 'any_url'
    fakeAxios = axios as jest.Mocked<typeof axios>
    fakeAxios.get.mockResolvedValue({
      status: 200,
      data: 'any_data'
    })
  })

  beforeEach(() => {
    sut = new AxiosHttpClient()
  })

  describe('get', () => {
    it('Should call get with correct params', async () => {
      await sut.get({ url })
      expect(fakeAxios.get).toHaveBeenCalledWith(url)
      expect(fakeAxios.get).toHaveBeenCalledTimes(1)
    })

    it('Should return data on success', async () => {
      const result = await sut.get({ url })
      expect(result).toEqual('any_data')
    })

    it('Should rethrow if get throws', async () => {
      fakeAxios.get.mockRejectedValueOnce(new Error('http_error'))
      const promise = sut.get({ url })
      await expect(promise).rejects.toThrow(new Error('http_error'))
    })
  })
})
