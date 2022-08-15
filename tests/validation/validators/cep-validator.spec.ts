import { Invalidation } from '@/validation/helpers'
import { CepValidator } from '@/validation/validators'

const makeSut = (): CepValidator => new CepValidator()

describe('Cep Validator', () => {
  test.each([
    '37550-4554',
    '00000000',
    '12345-67',
    '77777777'
  ])('Should return pattern error if param is not a valid cep', async (cep) => {
    const sut = makeSut()
    const result = await sut.validate(cep)
    expect(result).toEqual(Invalidation.pattern())
  })

  test('Should return void if param is a valid cep', async () => {
    const sut = makeSut()
    const result = await sut.validate('64218-330')
    expect(result).toBeUndefined()
  })
})
