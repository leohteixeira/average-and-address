import { Address } from '@/domain/models'

export const mockAddressModel = (): Address.Model => ({
  cep: 'any_cep',
  logradouro: 'any_address',
  complemento: 'any_complement',
  bairro: 'any_neighborhood',
  localidade: 'any_city',
  uf: 'any_state',
  ibge: 'any_ibge',
  gia: 'any_gia',
  ddd: 'any_ddd',
  siafi: 'any_siafi'
})
