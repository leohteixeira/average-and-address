import { Address } from '@/domain/models'

export interface GetAddress {
  get: (params: GetAddress.Params) => Promise<GetAddress.Result>
}

export namespace GetAddress {
  export type Params = {
    cep: string
  }
  export type Result = Address.Model
}
