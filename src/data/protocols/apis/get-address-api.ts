import { Address } from '@/domain/models'

export interface GetAddressApi {
  getAddress: (cep: GetAddressApi.Params) => Promise<GetAddressApi.Result>
}

export namespace GetAddressApi {
  export type Params = string

  export type Result = Address.Model
}
