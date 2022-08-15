/* eslint-disable curly */
import { AxiosError } from '@/data/errors'
import { GetAddressApi } from '@/data/protocols'
import { HttpGetClient } from '@/infra/http'

export class GetViaCepAddressApi implements GetAddressApi {
  constructor(
    private readonly baseUrl: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async getAddress(cep: GetAddressApi.Params): Promise<GetAddressApi.Result> {
    try {
      const result = await this.httpGetClient.get({
        url: `${this.baseUrl}/${cep}/json`
      })

      if (result.erro) return { erro: 'CEP nao encontrado' }

      if (result.bairro === '')
        return { ...result, bairro: 'Nenhum bairro encontrado com esse CEP' }

      return result
    } catch (error) {
      if (error?.request?.res?.statusCode === 400)
        throw new AxiosError.BadRequest()
      throw new AxiosError.Error(String(error))
    }
  }
}
