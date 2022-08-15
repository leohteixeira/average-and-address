import { env } from '@/main/config'
import { GetViaCepAddressApi } from '@/infra/apis'
import { makeAxiosHttpClient } from '@/main/factories/infras'

export const makeGetViaCepAddressApi = (): GetViaCepAddressApi => {
  return new GetViaCepAddressApi(env.viaCepBaseUrl, makeAxiosHttpClient())
}
